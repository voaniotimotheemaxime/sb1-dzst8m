import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-muted-foreground mb-8">
              Prêt à démarrer votre projet ? Contactez-nous pour en discuter.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@digicraft.fr</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Avenue Digital, 75001 Paris</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="Nom" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Sujet" />
            <Textarea placeholder="Message" className="min-h-[150px]" />
            <Button className="w-full">Envoyer</Button>
          </div>
        </div>
      </div>
    </section>
  );
}