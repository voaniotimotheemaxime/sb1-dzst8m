import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Découvrez votre futur site gratuitement
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Remplissez le formulaire et recevez une maquette gratuite de votre futur site
              sous 24h. Sans engagement.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contact@noveodigital.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-muted-foreground">01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted-foreground">123 Avenue Digital, 75001 Paris</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Jean Dupont" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jean@exemple.fr" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" placeholder="06 12 34 56 78" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Votre projet</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez brièvement votre projet..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Recevoir ma maquette gratuite
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}