import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX, Maximize, Minimize, Play, Pause } from "lucide-react";
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

  useEffect(() => {
    if (!isOpen || !videoRef.current) return;

    const video = videoRef.current;
    let hls: Hls | null = null;

    const initPlayer = () => {
      setError(null);
      
      if (streamUrl.includes('.m3u8') || streamUrl.includes(':80/') || streamUrl.includes(':8080/')) {
        if (Hls.isSupported()) {
          hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
          });
          hls.loadSource(streamUrl);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => setIsPlaying(false));
          });
          hls.on(Hls.Events.ERROR, (_, data) => {
            if (data.fatal) {
              setError("Erreur de chargement du flux");
            }
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = streamUrl;
          video.play().catch(() => setIsPlaying(false));
        } else {
          setError("Votre navigateur ne supporte pas ce format");
        }
      } else {
        video.src = streamUrl;
        video.play().catch(() => setIsPlaying(false));
      }
    };

    initPlayer();

    return () => {
      if (hls) {
        hls.destroy();
      }
      video.src = "";
    };
  }, [isOpen, streamUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") togglePlay();
      if (e.key === "m") toggleMute();
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
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
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

        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
          autoPlay
        />

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <div className="text-center">
              <p className="text-red-500 font-semibold mb-2">{error}</p>
              <p className="text-muted-foreground text-sm">Vérifiez que le flux est actif</p>
            </div>
          </div>
        )}

        {/* Controls */}
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
      </div>
    </div>
  );
};

export default VideoPlayerModal;
