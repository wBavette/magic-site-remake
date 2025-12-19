import { ArrowLeft, Check, Tv, Shield, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IPTV = () => {
  const features = [
    { icon: Tv, text: "Plus de 10 000 chaînes" },
    { icon: Globe, text: "Accès mondial" },
    { icon: Clock, text: "Support 24/7" },
    { icon: Shield, text: "Connexion sécurisée" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Main Card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Tv className="w-4 h-4" />
              <span className="text-sm font-medium">Offre Exclusive</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre IPTV 1 an à <span className="text-primary">50€</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mb-8">
              Profitez d'un accès illimité à tous vos contenus préférés pendant une année complète. 
              Qualité HD, streaming fluide et support technique inclus.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-foreground">50€</span>
                <span className="text-muted-foreground">/ an</span>
              </div>
              <p className="text-sm text-muted-foreground">Paiement unique, sans engagement</p>
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Check className="w-5 h-5" />
              Obtenir l'accès
            </a>

            {/* Contact Info */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Une question ? Contactez-nous sur{" "}
              <a href="#" className="text-primary hover:underline">Discord</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IPTV;
