import meruLogo from "@/assets/meru-logo.png";

const HeroLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-slide-up">
      {/* Crown SVG */}
      <svg 
        className="w-32 h-20 text-crown mb-2" 
        viewBox="0 0 100 60" 
        fill="currentColor"
      >
        <path d="M50 5L65 25L85 10L75 45H25L15 10L35 25L50 5Z" />
        <ellipse cx="50" cy="50" rx="30" ry="5" opacity="0.2" />
      </svg>
      
      {/* Logo */}
      <img 
        src={meruLogo} 
        alt="MERU TV" 
        className="h-24 w-auto object-contain"
      />
      
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-foreground tracking-tight mt-4">
        MERU<span className="text-primary">TV</span>
      </h1>
      
      <p className="text-muted-foreground text-lg mt-2">
        The best place you've ever seen
      </p>
    </div>
  );
};

export default HeroLogo;
