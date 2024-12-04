import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Sophie Martin",
    role: "Directrice Générale",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "10 ans d'expérience en direction de projets digitaux",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Thomas Dubois",
    role: "Directeur Technique",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Expert en architectures web modernes",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Julie Bernard",
    role: "Directrice Artistique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Passionnée de design et d'expérience utilisateur",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function AboutTeam() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des experts passionnés qui donnent vie à vos projets
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}