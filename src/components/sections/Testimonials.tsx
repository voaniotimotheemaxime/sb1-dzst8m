import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Marie Laurent",
    role: "CEO, Fashion Store",
    content: "L'équipe a transformé notre vision en une boutique en ligne exceptionnelle. Les ventes ont augmenté de 150% depuis le lancement.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, TechStart",
    content: "Un travail remarquable sur notre application mobile. Le processus de développement était transparent et professionnel.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, InnovCorp",
    content: "Notre nouveau site web a complètement transformé notre image de marque. Un grand merci à toute l'équipe !",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients satisfaits
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}