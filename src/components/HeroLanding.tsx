import { Tv, ArrowRight } from "lucide-react";
import StreamCard from "./StreamCard";

const HeroLanding = () => {
  const backupStreams = [
    {
      id: "1",
      title: "Match Live",
      category: "Sport",
      viewers: 1247,
      isLive: true,
    },
    {
      id: "2", 
      title: "Événement Spécial",
      category: "Divertissement",
      viewers: 856,
      isLive: true,
    },
    {
      id: "3",
      title: "Stream Gaming",
      category: "Gaming",
      viewers: 423,
      isLive: false,
    },
  ];

  return (
    <section className="flex-1 hero-gradient flex flex-col px-6 py-12">
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
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_hsl(217_91%_60%/0.6)]" />
          <h2 className="text-lg font-semibold text-foreground">Streams disponibles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {backupStreams.map((stream) => (
            <StreamCard
              key={stream.id}
              title={stream.title}
              category={stream.category}
              viewers={stream.viewers}
              isLive={stream.isLive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
