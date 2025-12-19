import { Tv, ArrowRight } from "lucide-react";

const HeroLanding = () => {
  const scrollToStreams = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center px-6">
      <div className="max-w-[650px] w-full text-center">
        {/* Status Badge */}
        <div 
          className="inline-flex items-center gap-2 badge-glass rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="live-dot w-2 h-2 rounded-full animate-glow" />
          <span className="text-sm font-medium text-foreground/90">
            Live maintenant
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground tracking-tight mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          meru<span className="text-gradient-subtle">TV</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Votre destination ultime pour le streaming live
        </p>

        {/* Description */}
        <p 
          className="text-sm md:text-base text-muted-foreground/70 leading-relaxed mb-10 max-w-[520px] mx-auto text-balance opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Accédez à tous vos contenus préférés en un seul endroit. Interface moderne, 
          streaming fluide, expérience premium.
        </p>

        {/* CTA Button */}
        <div 
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button onClick={scrollToStreams} className="btn-primary-hero group">
            <Tv className="w-5 h-5" />
            <span>Voir les streams</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
