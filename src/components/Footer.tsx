import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Made with love */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-live fill-live" />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-4 text-sm">
            <Link 
              to="/devenir-hebergeur" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Devenir hébergeur
            </Link>
            <Link 
              to="/cgu" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              CGU
            </Link>
            <Link 
              to="/confidentialite" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Confidentialité
            </Link>
            <Link 
              to="/dmca" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              DMCA
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
