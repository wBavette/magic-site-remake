import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Users } from "lucide-react";

const DevenirHebergeur = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Devenir Hébergeur
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Rejoignez notre équipe et aidez-nous à diffuser du contenu de qualité à notre communauté.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Infrastructure</h3>
              <p className="text-muted-foreground text-sm">
                Accès à notre infrastructure de streaming haute performance
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Protection</h3>
              <p className="text-muted-foreground text-sm">
                Anonymat garanti et protection de vos données
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Communauté</h3>
              <p className="text-muted-foreground text-sm">
                Rejoignez une équipe passionnée et solidaire
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="gradient-alert rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
            <p className="mb-6 opacity-90">
              Contactez-nous sur Discord pour en savoir plus sur les conditions et commencer l'aventure.
            </p>
            <Button 
              size="lg" 
              className="bg-card text-foreground hover:bg-card/90"
            >
              Rejoindre Discord
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevenirHebergeur;
