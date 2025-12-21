import { Eye, Play } from "lucide-react";

interface StreamCardProps {
  title: string;
  category: string;
  thumbnail?: string;
  viewers: number;
  isLive?: boolean;
  url?: string;
}

const StreamCard = ({ title, category, thumbnail, viewers, isLive = false, url = "#" }: StreamCardProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 cursor-pointer group card-glow"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-muted-foreground/50 text-sm font-medium">{title}</span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl shadow-primary/50">
            <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
        
        {/* Live badge */}
        {isLive && (
          <span className="absolute top-3 left-3 bg-live text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg shadow-live/40 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            LIVE
          </span>
        )}

        {/* Viewer count on thumbnail */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-foreground bg-background/80 backdrop-blur-sm px-2.5 py-1.5 rounded-lg">
          <Eye className="w-3.5 h-3.5" />
          {viewers.toLocaleString()}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors duration-300 text-lg">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground font-medium">{category}</span>
          
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
            Regarder →
          </span>
        </div>
      </div>
    </a>
  );
};

export default StreamCard;