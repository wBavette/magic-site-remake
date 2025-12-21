import { ArrowRight, AlertTriangle, X } from "lucide-react";
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
    <section className="flex-1 hero-gradient flex flex-col px-4 py-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] -top-32 -left-32" />
      <div className="glow-orb glow-orb-accent w-[500px] h-[500px] -bottom-40 -right-32 animate-delay-300" />

      {/* Warning Alert - Top Right */}
      {showAlert && (
        <div className="fixed top-20 right-4 z-50 max-w-xs animate-fade-in">
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl">
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 text-amber-400 mb-2 pr-6">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span className="font-bold text-xs tracking-wide">SITE TEMPORAIRE</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3">
              Rejoins notre canal secours !
            </p>
            
            <a
              href="https://discord.com/invite/EMmEXv3v4x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full text-xs py-2 px-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Rejoindre Discord
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Hero Content - Compact */}
      <div className="text-center py-4 relative z-10">
        {/* Status Badge */}
        <div 
          className="inline-flex items-center gap-2 badge-glass rounded-full px-4 py-1.5 mb-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="live-dot w-2 h-2 rounded-full animate-glow" />
          <span className="text-xs font-semibold text-foreground/90 tracking-wide">
            Live maintenant
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 opacity-0 animate-fade-in font-display"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">meru</span>
          <span className="text-gradient">TV</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-sm md:text-base text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Votre destination ultime pour le streaming live
        </p>
      </div>

      {/* Streams Section - Compact */}
      <div 
        className="flex-1 w-full max-w-5xl mx-auto opacity-0 animate-fade-in relative z-10"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 bg-live/10 border border-live/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-live shadow-[0_0_6px_hsl(142_76%_45%/0.8)] animate-glow" />
            <span className="text-xs font-semibold text-live">En direct</span>
          </div>
          <h2 className="text-base font-bold text-foreground">Streams disponibles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {backupStreams.map((stream, index) => (
            <div 
              key={stream.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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