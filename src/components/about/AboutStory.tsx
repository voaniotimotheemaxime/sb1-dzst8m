import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutStory() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Notre équipe en action"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Parcours</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fondée en 2018, NoveoDigital est née de la passion commune de ses fondateurs
                pour le digital et l'innovation. Notre mission est simple : transformer
                vos idées en solutions digitales performantes et esthétiques.
              </p>
              <p>
                Aujourd'hui, notre équipe de 15 experts accompagne des entreprises
                de toutes tailles dans leur transformation digitale, avec un focus
                particulier sur l'expérience utilisateur et la performance technique.
              </p>
            </div>
            <div className="mt-8">
              <Button>
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}