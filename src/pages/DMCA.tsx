import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileWarning, Mail, Clock, AlertCircle } from "lucide-react";

const DMCA = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Millennium Copyright Act</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politique DMCA
            </h1>
            <p className="text-muted-foreground">
              Procédure de signalement des violations de droits d'auteur sur meruTV
            </p>
          </div>
          
          <div className="space-y-6">
            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">Notice and Takedown</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                meruTV respecte les droits de propriété intellectuelle d'autrui et attend 
                de ses utilisateurs qu'ils fassent de même. Conformément au Digital Millennium 
                Copyright Act (DMCA), nous répondrons rapidement à toute réclamation d'atteinte 
                au droit d'auteur signalée de manière appropriée.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileWarning className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">Comment signaler une violation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous pensez que votre œuvre protégée par le droit d'auteur a été copiée 
                d'une manière constituant une violation, veuillez nous fournir les informations suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-2">
                <li>Une description de l'œuvre protégée par le droit d'auteur</li>
                <li>L'URL exacte où se trouve le contenu en infraction sur meruTV</li>
                <li>Vos coordonnées complètes (nom, adresse, email, téléphone)</li>
                <li>Une déclaration de bonne foi indiquant que l'utilisation n'est pas autorisée</li>
                <li>Une déclaration sous serment attestant l'exactitude des informations</li>
                <li>Votre signature électronique ou physique</li>
              </ul>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">Délai de traitement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Une fois votre demande DMCA reçue et vérifiée, nous nous engageons à :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 mt-4">
                <li>Accuser réception de votre demande sous 24 heures</li>
                <li>Examiner la demande dans un délai de 48 à 72 heures</li>
                <li>Retirer le contenu en infraction si la demande est validée</li>
                <li>Vous informer des actions entreprises</li>
              </ul>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">Contact DMCA</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute demande DMCA concernant meruTV, veuillez nous contacter via notre 
                serveur Discord officiel. Un membre de notre équipe de modération traitera 
                votre demande dans les meilleurs délais.
              </p>
              <div className="mt-4">
                <a
                  href="https://discord.gg/56GhAx7qgT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary text-foreground font-medium py-2 px-4 rounded-lg hover:bg-primary/20 transition-all duration-300"
                >
                  Contacter via Discord
                </a>
              </div>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '500ms', animationFillMode: 'both' }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">Contre-notification</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si vous pensez que votre contenu a été retiré par erreur, vous pouvez soumettre 
                une contre-notification. Celle-ci doit inclure vos coordonnées, une description 
                du contenu retiré, et une déclaration sous serment indiquant votre bonne foi 
                quant à la légalité du contenu.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DMCA;
