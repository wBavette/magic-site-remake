import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { to: "/mentions-legales", label: "Mentions légales" },
    { to: "/cgu", label: "CGU" },
    { to: "/confidentialite", label: "Confidentialité" },
    { to: "/dmca", label: "DMCA" },
  ];

  return (
    <footer className="border-t border-border/50 py-3 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by
            <span className="font-semibold text-foreground">meruTV</span>
          </p>
          
          <nav className="flex flex-wrap items-center justify-center gap-1">
            {footerLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="text-xs text-muted-foreground hover:text-primary px-2 py-1 rounded hover:bg-primary/10 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;