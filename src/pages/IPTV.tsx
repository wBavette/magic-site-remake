import { Tv, Zap, Monitor, Shield, Check } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IPTV = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("1an");

  const features = [
    { icon: Tv, title: "15 000+ Chaînes", description: "HD et 4K disponibles" },
    { icon: Zap, title: "Ultra Rapide", description: "Anti-buffering" },
    { icon: Monitor, title: "Multi-Appareils", description: "TV, mobile, PC" },
    { icon: Shield, title: "Sécurisé", description: "Support 24/7" },
  ];

  const plans = [
    { id: "3mois", duration: "3 mois", price: "20€" },
    { id: "6mois", duration: "6 mois", price: "35€" },
    { id: "1an", duration: "1 an", price: "50€" },
  ];

  const included = [
    "VOD illimité (50 000+ films/séries)",
    "EPG complet",
    "Mises à jour automatiques",
    "Compatible tous lecteurs IPTV",
    "Sans engagement",
    "Essai gratuit 24h",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6">
              <span>✨</span>
              <span className="text-sm font-medium">Service IPTV Premium</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Le Meilleur de la TV{" "}
              <span className="text-cyan-400">en Streaming</span>
            </h1>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Profitez de milliers de chaînes et contenus en haute qualité. Installation simple, support réactif.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing & Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Plans */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Nos Forfaits</h2>
              
              <div className="space-y-3 mb-6">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      selectedPlan === plan.id
                        ? "bg-primary/10 border-primary"
                        : "bg-muted/50 border-border hover:border-muted-foreground"
                    }`}
                  >
                    <span className="font-medium text-foreground">{plan.duration}</span>
                    <span className="text-xl font-bold text-foreground">{plan.price}</span>
                  </button>
                ))}
              </div>

              <a
                href="https://discord.gg/EMmEXv3v4x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Je m'abonne maintenant
              </a>
            </div>

            {/* Included */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Inclus dans l'offre</h2>
              
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Prêt à commencer ?</h2>
            <p className="text-muted-foreground mb-6">Essai gratuit 24h sans engagement</p>
            
            <a
              href="https://discord.gg/EMmEXv3v4x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary/10 border border-primary text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/20 transition-colors"
            >
              Découvrir nos Forfaits
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IPTV;