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
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer group">
      {/* Thumbnail */}
      <div className="relative aspect-video stream-card-gradient">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-primary-foreground/50 text-lg font-medium">{title}</span>
          </div>
        )}
        
        {/* Live badge */}
        {isLive && (
          <span className="absolute top-3 left-3 badge-live animate-pulse">
            LIVE
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{category}</span>
          
          <span className="badge-viewers">
            <Eye className="w-3 h-3" />
            {viewers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
