import { Globe, ShoppingBag, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Sites Web",
    description: "Sites vitrines et plateformes web sur mesure avec des designs uniques et une expérience utilisateur optimale.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Boutiques en ligne performantes et sécurisées pour développer votre activité sur internet.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Applications natives et cross-platform pour iOS et Android, avec une expérience utilisateur fluide.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions digitales complètes pour tous vos besoins
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    "bg-gradient-to-r",
                    service.gradient
                  )}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}