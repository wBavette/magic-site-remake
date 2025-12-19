import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collecte des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous collectons uniquement les données nécessaires au bon fonctionnement du service. 
                Aucune donnée personnelle n'est vendue ou partagée avec des tiers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Utilisation des cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience utilisateur. 
                Ces cookies sont essentiels au fonctionnement du site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Protection des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                contre tout accès non autorisé.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles. 
                Contactez-nous pour exercer ces droits.
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
