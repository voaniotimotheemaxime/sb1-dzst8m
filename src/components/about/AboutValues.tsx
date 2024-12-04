import { Lightbulb, Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la créativité et de la technologie pour offrir des solutions avant-gardistes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Le travail d'équipe et l'écoute active sont au cœur de notre approche pour créer des solutions sur mesure.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet, avec une attention particulière aux détails et à la qualité.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "La performance technique et l'optimisation sont notre priorité pour des solutions durables et efficaces.",
  },
];

export function AboutValues() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Les principes qui guident nos actions et façonnent notre culture d'entreprise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}