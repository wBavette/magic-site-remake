import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, Building, Mail, Globe } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-2 mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium">Informations légales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mentions Légales
            </h1>
            <p className="text-muted-foreground">
              Informations relatives à l'éditeur et à l'hébergement du site meruTV
            </p>
          </div>
          
          <div className="space-y-6">
            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
              </div>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong className="text-foreground">Nom du site :</strong> meruTV</p>
                <p><strong className="text-foreground">Type :</strong> Service de streaming et divertissement</p>
                <p><strong className="text-foreground">Contact :</strong> Via notre serveur Discord officiel</p>
              </div>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">2. Hébergement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Le site meruTV est hébergé par des services d'hébergement tiers. 
                Les informations concernant l'hébergeur peuvent être obtenues sur demande 
                via notre serveur Discord.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos) 
                sont la propriété exclusive de leurs détenteurs respectifs. Toute reproduction, 
                représentation, modification ou adaptation de tout ou partie de ces éléments 
                est strictement interdite sans autorisation préalable.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-semibold text-foreground">4. Contact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant le site ou son contenu, vous pouvez nous contacter 
                via notre serveur Discord officiel. Nous nous efforçons de répondre dans les 
                meilleurs délais.
              </p>
            </section>

            <section 
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: '500ms', animationFillMode: 'both' }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                meruTV ne saurait être tenu responsable des dommages directs ou indirects 
                causés au matériel de l'utilisateur lors de l'accès au site. Le site décline 
                toute responsabilité quant aux contenus diffusés par des sources tierces.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
