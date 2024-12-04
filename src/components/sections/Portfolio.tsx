import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Mode",
    description: "Plateforme de vente en ligne pour une marque de mode française",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    tags: ["E-commerce", "React", "Node.js"],
  },
  {
    title: "Application SaaS",
    description: "Solution de gestion de projet pour entreprises",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["SaaS", "TypeScript", "API"],
  },
  {
    title: "Site Vitrine Restaurant",
    description: "Site web moderne pour un restaurant gastronomique",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    tags: ["Restaurant", "Design", "SEO"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos derniers projets et laissez-vous inspirer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}