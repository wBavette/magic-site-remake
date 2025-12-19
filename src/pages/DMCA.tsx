import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DMCA = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            DMCA Policy
          </h1>
          
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Notice and Takedown</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous respectons les droits de propriété intellectuelle d'autrui et nous attendons 
                de nos utilisateurs qu'ils fassent de même. Conformément au Digital Millennium 
                Copyright Act (DMCA), nous répondrons rapidement aux réclamations d'atteinte au 
                droit d'auteur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Comment signaler une violation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous pensez que votre travail protégé par le droit d'auteur a été copié d'une 
                manière qui constitue une violation du droit d'auteur, veuillez nous fournir les 
                informations suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Une description de l'œuvre protégée par le droit d'auteur</li>
                <li>L'URL où se trouve le contenu en infraction</li>
                <li>Vos coordonnées (nom, adresse, email, téléphone)</li>
                <li>Une déclaration de bonne foi</li>
                <li>Votre signature électronique ou physique</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute demande DMCA, veuillez nous contacter via notre serveur Discord 
                ou par email à l'adresse indiquée sur notre canal officiel.
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
