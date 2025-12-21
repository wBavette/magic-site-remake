import { ArrowRight, AlertTriangle, X, Zap } from "lucide-react";
import { useState } from "react";
import StreamCard from "./StreamCard";

const STREAM_THUMBNAIL = "https://media.discordapp.net/attachments/1433273779022463058/1450527603344670832/merutv_logo.jpg?ex=6948229a&is=6946d11a&hm=5f3a9eda2ba3d79f38f4943136c2a1d05bfb11a357e191809b1c2396eee22a0a&=&format=webp";

const HeroLanding = () => {
  const [showAlert, setShowAlert] = useState(true);

  const backupStreams = [
    {
      id: "1",
      title: "Match Live",
      category: "Sport",
      viewers: 1247,
      isLive: true,
      thumbnail: STREAM_THUMBNAIL,
    },
    {
      id: "2", 
      title: "Événement Spécial",
      category: "Divertissement",
      viewers: 856,
      isLive: true,
      thumbnail: STREAM_THUMBNAIL,
    },
    {
      id: "3",
      title: "Stream Gaming",
      category: "Gaming",
      viewers: 423,
      isLive: true,
      thumbnail: STREAM_THUMBNAIL,
    },
  ];

  return (
    <section className="flex-1 hero-gradient flex flex-col px-6 py-12 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-40 -left-40" />
      <div className="glow-orb glow-orb-accent w-[600px] h-[600px] -bottom-60 -right-40 animate-delay-300" />
      <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />

      {/* Warning Alert - Top Right */}
      {showAlert && (
        <div className="fixed top-20 right-4 z-50 max-w-sm animate-fade-in">
          <div className="bg-card/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-5 shadow-2xl shadow-primary/10">
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 text-amber-400 mb-3 pr-6">
              <div className="p-1.5 bg-amber-400/10 rounded-lg">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              </div>
              <span className="font-bold text-sm tracking-wide">SITE TEMPORAIRE</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Rejoins notre canal secours pour être toujours informé !
            </p>
            
            <a
              href="https://discord.com/invite/EMmEXv3v4x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-hero w-full text-sm py-3"
            >
              Rejoindre Discord
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[700px] w-full text-center">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2.5 badge-glass rounded-full px-5 py-2.5 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="live-dot w-2.5 h-2.5 rounded-full animate-glow" />
            <span className="text-sm font-semibold text-foreground/90 tracking-wide">
              Live maintenant
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in font-display"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">meru</span>
            <span className="text-gradient">TV</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl font-medium text-muted-foreground mb-10 opacity-0 animate-fade-in max-w-md mx-auto leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Votre destination ultime pour le streaming live
          </p>

        </div>
      </div>

      {/* Streams Section */}
      <div 
        id="streams"
        className="w-full max-w-6xl mx-auto opacity-0 animate-fade-in relative z-10"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-live/10 border border-live/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-live shadow-[0_0_8px_hsl(142_76%_45%/0.8)] animate-glow" />
            <span className="text-sm font-semibold text-live">En direct</span>
          </div>
          <h2 className="text-xl font-bold text-foreground">Streams disponibles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {backupStreams.map((stream, index) => (
            <div 
              key={stream.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.15}s` }}
            >
              <StreamCard
                title={stream.title}
                category={stream.category}
                viewers={stream.viewers}
                isLive={stream.isLive}
                thumbnail={stream.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;