import { Eye } from "lucide-react";

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
      className="block bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer group hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground/50 text-sm font-medium">{title}</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Live badge */}
        {isLive && (
          <span className="absolute top-3 left-3 bg-live text-primary-foreground px-2.5 py-1 rounded-md text-xs font-bold animate-pulse-soft shadow-lg shadow-live/30">
            LIVE
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary/80 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{category}</span>
          
          <span className="flex items-center gap-1.5 text-xs font-medium text-live bg-live/10 px-2 py-1 rounded group-hover:bg-live/20 transition-colors duration-300">
            <Eye className="w-3 h-3" />
            {viewers}
          </span>
        </div>
      </div>
    </a>
  );
};

export default StreamCard;
