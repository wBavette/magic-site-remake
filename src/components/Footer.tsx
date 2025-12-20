import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-red-500">❤</span> meruTV
          </p>
          
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link 
              to="/mentions-legales" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <Link 
              to="/cgu" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CGU
            </Link>
            <Link 
              to="/confidentialite" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Confidentialité
            </Link>
            <Link 
              to="/dmca" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
