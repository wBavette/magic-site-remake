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
      className="block bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 cursor-pointer group card-glow"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-muted-foreground/50 text-xs font-medium">{title}</span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
            <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
        
        {/* Live badge */}
        {isLive && (
          <span className="absolute top-2 left-2 bg-live text-primary-foreground px-2 py-0.5 rounded text-[10px] font-bold tracking-wide shadow-lg shadow-live/40 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-primary-foreground animate-pulse" />
            LIVE
          </span>
        )}

        {/* Viewer count on thumbnail */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-semibold text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
          <Eye className="w-3 h-3" />
          {viewers.toLocaleString()}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors duration-300 text-sm">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-muted-foreground">{category}</span>
          
          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            Regarder →
          </span>
        </div>
      </div>
    </a>
  );
};

export default StreamCard;