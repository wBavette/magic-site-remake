import { Eye } from "lucide-react";

interface StreamCardProps {
  title: string;
  category: string;
  thumbnail?: string;
  viewers: number;
  isLive?: boolean;
}

const StreamCard = ({ title, category, thumbnail, viewers, isLive = false }: StreamCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground/50 text-sm font-medium">{title}</span>
          </div>
        )}
        
        {/* Live badge */}
        {isLive && (
          <span className="absolute top-3 left-3 bg-live text-primary-foreground px-2 py-0.5 rounded text-xs font-semibold animate-pulse-soft">
            LIVE
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground truncate group-hover:text-muted-foreground transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{category}</span>
          
          <span className="flex items-center gap-1.5 text-xs font-medium text-live bg-live/10 px-2 py-1 rounded">
            <Eye className="w-3 h-3" />
            {viewers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
