import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX, Maximize, Minimize, Play, Pause, RefreshCw } from "lucide-react";
import Hls from "hls.js";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  streamUrl: string;
  title: string;
}

const VideoPlayerModal = ({ isOpen, onClose, streamUrl, title }: VideoPlayerModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setIsLoading(true);
      setUseIframe(false);
      return;
    }
    
    if (useIframe || !videoRef.current) return;

    const video = videoRef.current;
    let hls: Hls | null = null;

    const initPlayer = () => {
      setError(null);
      setIsLoading(true);
      
      // Try direct video source first
      if (Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          xhrSetup: (xhr) => {
            xhr.timeout = 10000;
          },
        });
        
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          video.play().catch(() => setIsPlaying(false));
        });
        
        hls.on(Hls.Events.ERROR, (_, data) => {
          console.log("HLS Error:", data);
          if (data.fatal) {
            setIsLoading(false);
            // Try iframe as fallback
            setUseIframe(true);
          }
        });
        
        // Timeout fallback
        setTimeout(() => {
          if (isLoading) {
            setUseIframe(true);
          }
        }, 5000);
        
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = streamUrl;
        video.addEventListener('loadeddata', () => setIsLoading(false));
        video.addEventListener('error', () => setUseIframe(true));
        video.play().catch(() => setIsPlaying(false));
      } else {
        setUseIframe(true);
      }
    };

    initPlayer();

    return () => {
      if (hls) {
        hls.destroy();
      }
      video.src = "";
    };
  }, [isOpen, streamUrl, useIframe]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!useIframe) {
        if (e.key === " ") togglePlay();
        if (e.key === "m") toggleMute();
      }
      if (e.key === "f") toggleFullscreen();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, useIframe]);

  const togglePlay = () => {
    if (!videoRef.current || useIframe) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current || useIframe) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const retry = () => {
    setUseIframe(false);
    setError(null);
    setIsLoading(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Title */}
        <div className={`absolute top-4 left-4 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-white font-bold text-lg drop-shadow-lg">{title}</h3>
        </div>

        {/* Loading state */}
        {isLoading && !useIframe && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Chargement du flux...</p>
            </div>
          </div>
        )}

        {/* Video player or Iframe fallback */}
        {useIframe ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-black text-center p-6">
            <p className="text-amber-400 font-semibold mb-3">Le flux nécessite un lecteur externe</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Ce type de flux IPTV ne peut pas être lu directement dans le navigateur à cause des restrictions CORS.
            </p>
            <div className="flex gap-3">
              <a
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                Ouvrir dans VLC
              </a>
              <button
                onClick={retry}
                className="px-6 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Réessayer
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Copiez ce lien dans VLC : <code className="bg-muted px-2 py-1 rounded text-xs break-all">{streamUrl}</code>
            </p>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            playsInline
            autoPlay
          />
        )}

        {/* Controls - only show for video player */}
        {!useIframe && (
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="p-2 hover:bg-white/20 rounded-full transition-all">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" fill="white" />
                  )}
                </button>
                <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded-full transition-all">
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </button>
                <span className="text-white/80 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-live animate-pulse" />
                  EN DIRECT
                </span>
              </div>
              <button onClick={toggleFullscreen} className="p-2 hover:bg-white/20 rounded-full transition-all">
                {isFullscreen ? (
                  <Minimize className="w-6 h-6 text-white" />
                ) : (
                  <Maximize className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayerModal;
