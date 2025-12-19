import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions générales d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Utilisation du service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est fourni à des fins de divertissement uniquement. Vous vous engagez à utiliser ce service 
                de manière responsable et conformément à toutes les lois applicables.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tout le contenu présent sur ce site est la propriété de leurs détenteurs respectifs. 
                Nous ne revendiquons aucun droit sur le contenu diffusé.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne sommes pas responsables des contenus diffusés par des tiers. 
                L'utilisation de ce site se fait à vos propres risques.
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
