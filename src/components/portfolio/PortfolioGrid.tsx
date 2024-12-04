import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "web" | "ecommerce" | "mobile";

const projects = [
  {
    id: 1,
    title: "Marketplace Mode Éthique",
    description: "Plateforme e-commerce pour une marque de mode écoresponsable",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    category: "ecommerce",
    tags: ["Shopify", "React", "TailwindCSS"],
    url: "#",
  },
  {
    id: 2,
    title: "Application de Gestion",
    description: "Solution SaaS de gestion de projet et de ressources",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "web",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    url: "#",
  },
  {
    id: 3,
    title: "Restaurant Gastronomique",
    description: "Site vitrine avec réservation en ligne",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    category: "web",
    tags: ["Vue.js", "Strapi", "Stripe"],
    url: "#",
  },
  {
    id: 4,
    title: "Application Fitness",
    description: "Application mobile de suivi d'entraînement",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    url: "#",
  },
  {
    id: 5,
    title: "Boutique Artisanale",
    description: "E-commerce pour artisans locaux",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    category: "ecommerce",
    tags: ["WooCommerce", "WordPress", "PHP"],
    url: "#",
  },
  {
    id: 6,
    title: "Application Immobilière",
    description: "Application de recherche immobilière",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    category: "mobile",
    tags: ["Flutter", "Node.js", "MongoDB"],
    url: "#",
  },
];

const categories = [
  { id: "all", label: "Tous les projets" },
  { id: "web", label: "Sites Web" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "mobile", label: "Applications" },
];

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id as Category)}
              className="min-w-[120px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="aspect-[16/9] overflow-hidden">
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
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Voir le projet
                      <ExternalLink className="h-4 w-4" />
                    </a>
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