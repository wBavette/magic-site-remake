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
    <section className="flex-1 hero-gradient flex flex-col px-6 py-12 relative">
      {/* Warning Alert - Top Right */}
      {showAlert && (
        <div className="fixed top-20 right-4 z-50 max-w-sm animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 text-amber-400 mb-2 pr-6">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold text-sm">LE SITE PEUT SAUTER À TOUT MOMENT</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">
              📢 Rejoins notre canal secours pour être toujours informé !
            </p>
            
            <a
              href="https://discord.com/invite/EMmEXv3v4x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
            >
              Rejoignez ici !
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[650px] w-full text-center">
          {/* Status Badge */}
          <div 
            className="inline-flex items-center gap-2 badge-glass rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="live-dot w-2 h-2 rounded-full animate-glow" />
            <span className="text-sm font-medium text-foreground/90">
              Live maintenant
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            meru<span className="text-gradient-subtle">TV</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl font-medium text-muted-foreground mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Votre destination ultime pour le streaming live
          </p>
        </div>
      </div>

      {/* Streams Section */}
      <div 
        className="w-full max-w-6xl mx-auto opacity-0 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_hsl(217_91%_60%/0.6)] animate-glow" />
          <h2 className="text-lg font-semibold text-foreground">Streams disponibles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
