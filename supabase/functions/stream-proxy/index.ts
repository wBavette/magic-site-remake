import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, range",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range, Content-Type",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const streamUrl = url.searchParams.get("url");

    if (!streamUrl) {
      console.error("Missing stream URL parameter");
      return new Response(
        JSON.stringify({ error: "Missing stream URL parameter" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log(`Proxying stream: ${streamUrl}`);

    // Forward the request to the actual stream
    const headers: HeadersInit = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    };

    // Forward range header for video seeking
    const rangeHeader = req.headers.get("range");
    if (rangeHeader) {
      headers["Range"] = rangeHeader;
    }

    const response = await fetch(streamUrl, {
      method: "GET",
      headers,
    });

    if (!response.ok && response.status !== 206) {
      console.error(`Stream fetch failed: ${response.status} ${response.statusText}`);
      return new Response(
        JSON.stringify({ error: `Stream unavailable: ${response.status}` }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log(`Stream response: ${response.status}, Content-Type: ${response.headers.get("content-type")}`);

    // Get the content type from the response
    const contentType = response.headers.get("content-type") || "video/mp2t";
    const contentLength = response.headers.get("content-length");
    const contentRange = response.headers.get("content-range");

    // Build response headers
    const responseHeaders: Record<string, string> = {
      ...corsHeaders,
      "Content-Type": contentType,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    };

    if (contentLength) {
      responseHeaders["Content-Length"] = contentLength;
    }
    if (contentRange) {
      responseHeaders["Content-Range"] = contentRange;
    }

    // Stream the response body
    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    });

  } catch (error: any) {
    console.error("Proxy error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Proxy error" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
