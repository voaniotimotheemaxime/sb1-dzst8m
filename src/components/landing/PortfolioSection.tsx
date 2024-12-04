import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type ProjectType = "all" | "web" | "ecommerce" | "mobile";

const projects = [
  {
    id: 1,
    title: "Boutique Bio en Ligne",
    description: "E-commerce avec 300% d'augmentation des ventes",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    type: "ecommerce",
    tags: ["Shopify", "UX Design", "SEO"],
  },
  {
    id: 2,
    title: "Application Fitness",
    description: "10 000 téléchargements en 1 mois",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    type: "mobile",
    tags: ["React Native", "UI/UX", "Performance"],
  },
  {
    id: 3,
    title: "Site Vitrine Immobilier",
    description: "Leads multipliés par 4 en 2 mois",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    type: "web",
    tags: ["React", "Next.js", "SEO"],
  },
  {
    id: 4,
    title: "Marketplace Mode",
    description: "500K€ de CA en 6 mois",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    type: "ecommerce",
    tags: ["WooCommerce", "Design", "API"],
  },
];

const filters = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Sites Web" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "mobile", label: "Applications" },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des projets concrets qui ont transformé l'activité de nos clients
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id as ProjectType)}
              className="min-w-[120px]"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2"
                  >
                    Voir le projet
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}