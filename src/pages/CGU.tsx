import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Users, Shield, AlertTriangle, Scale } from "lucide-react";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Conditions d'utilisation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-muted-foreground">
              Veuillez lire attentivement ces conditions avant d'utiliser meruTV
            </p>
          </div>
          
          <div className="space-y-6">
            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">1. Acceptation des conditions</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                En accédant et en utilisant meruTV, vous acceptez d'être lié par ces conditions 
                générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas 
                utiliser ce service. L'utilisation du site implique l'acceptation pleine et 
                entière des présentes CGU.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">2. Utilisation du service</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                meruTV est fourni à des fins de divertissement uniquement. Vous vous engagez à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Utiliser le service de manière responsable</li>
                <li>Respecter toutes les lois applicables dans votre juridiction</li>
                <li>Ne pas tenter de contourner les mesures de sécurité du site</li>
                <li>Ne pas utiliser le service à des fins illégales</li>
              </ul>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tout le contenu présent sur meruTV est la propriété de leurs détenteurs respectifs. 
                Nous ne revendiquons aucun droit sur le contenu diffusé. Les marques, logos et 
                autres signes distinctifs appartiennent à leurs propriétaires respectifs.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">4. Limitation de responsabilité</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                meruTV ne saurait être tenu responsable des contenus diffusés par des tiers. 
                L'utilisation de ce site se fait à vos propres risques. Nous ne garantissons pas 
                la disponibilité continue du service ni l'exactitude des informations fournies.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '500ms', animationFillMode: 'both' }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Modifications des CGU</h2>
              <p className="text-muted-foreground leading-relaxed">
                meruTV se réserve le droit de modifier ces conditions à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site. 
                Il est de votre responsabilité de consulter régulièrement ces conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGU;
