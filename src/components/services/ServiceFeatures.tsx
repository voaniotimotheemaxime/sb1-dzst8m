import { Monitor, Zap, Lock, Palette, Search, Smartphone } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Design Responsive",
    description: "Sites web adaptés à tous les écrans",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Chargement rapide et optimisé",
  },
  {
    icon: Lock,
    title: "Sécurité",
    description: "Protection des données et SSL",
  },
  {
    icon: Palette,
    title: "Design Unique",
    description: "Interface sur mesure",
  },
  {
    icon: Search,
    title: "SEO Optimisé",
    description: "Visibilité maximale",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Expérience mobile optimale",
  },
];

export function ServiceFeatures() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}