import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, Cookie, Database, UserCheck, Eye } from "lucide-react";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Protection des données</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground">
              Comment meruTV protège et utilise vos données personnelles
            </p>
          </div>
          
          <div className="space-y-6">
            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">1. Collecte des données</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                meruTV collecte uniquement les données nécessaires au bon fonctionnement du service :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Données de navigation (pages visitées, durée de visite)</li>
                <li>Informations techniques (type de navigateur, appareil utilisé)</li>
                <li>Adresse IP (à des fins de sécurité)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Aucune donnée personnelle n'est vendue ou partagée avec des tiers à des fins commerciales.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">2. Utilisation des cookies</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                meruTV utilise des cookies pour améliorer votre expérience utilisateur :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong className="text-foreground">Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong className="text-foreground">Cookies de préférence :</strong> Mémorisation de vos paramètres</li>
                <li><strong className="text-foreground">Cookies analytiques :</strong> Amélioration de nos services</li>
              </ul>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">3. Protection des données</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                contre tout accès non autorisé, modification, divulgation ou destruction. 
                Ces mesures incluent le chiffrement des données et des protocoles de sécurité avancés.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">4. Vos droits</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous via notre serveur Discord.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '500ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">5. Durée de conservation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont conservées uniquement pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées. Les données de navigation sont 
                automatiquement supprimées après 12 mois.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;
