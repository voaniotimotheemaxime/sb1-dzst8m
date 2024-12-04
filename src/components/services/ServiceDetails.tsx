import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShoppingBag, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Internet",
    description: "Des sites web modernes, rapides et optimisés pour le référencement. Notre expertise en développement web nous permet de créer des sites sur mesure qui répondent parfaitement à vos besoins.",
    features: [
      "Design responsive et moderne",
      "Optimisation SEO",
      "Performance optimale",
      "Interface d'administration intuitive",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    icon: ShoppingBag,
    title: "Boutiques E-commerce",
    description: "Des solutions e-commerce performantes basées sur les meilleures plateformes du marché. Nous intégrons Shopify, WooCommerce ou des solutions sur mesure selon vos besoins.",
    features: [
      "Intégration Shopify/WooCommerce",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Dashboard analytics",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Des applications mobiles natives et hybrides pour iOS et Android. Notre expertise en développement mobile nous permet de créer des applications performantes et intuitives.",
    features: [
      "Applications iOS et Android",
      "React Native / Flutter",
      "Performances natives",
      "Mises à jour OTA",
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
];

export function ServiceDetails() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index !== services.length - 1 ? "mb-24" : ""
            }`}
          >
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button>
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}