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
    <footer className="border-t border-border/50 py-8 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            <span className="font-semibold text-foreground">meruTV</span>
          </p>
          
          <nav className="flex flex-wrap items-center justify-center gap-2">
            {footerLinks.map((link, index) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="text-sm text-muted-foreground hover:text-primary px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-all duration-200"
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