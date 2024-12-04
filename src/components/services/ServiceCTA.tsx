import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Button size="lg">
            Demander un devis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}