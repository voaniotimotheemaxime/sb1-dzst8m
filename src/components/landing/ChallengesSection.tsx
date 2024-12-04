import { Clock, DollarSign, Search, ThumbsDown } from "lucide-react";
import { GradientCard } from "@/components/ui/gradient-card";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const challenges = [
  {
    icon: Clock,
    title: "Délais interminables",
    description: "80% des projets web dépassent les délais initiaux de 2 à 3 mois",
    stat: "3x plus long",
  },
  {
    icon: DollarSign,
    title: "Budget explosé",
    description: "Les devis initiaux sont souvent dépassés de 40% en moyenne",
    stat: "+40% de surcoût",
  },
  {
    icon: ThumbsDown,
    title: "Résultat décevant",
    description: "65% des clients sont insatisfaits du résultat final",
    stat: "65% insatisfaits",
  },
  {
    icon: Search,
    title: "Manque de visibilité",
    description: "90% des sites ne génèrent aucun lead dans les 6 premiers mois",
    stat: "0 lead en 6 mois",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ChallengesSection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container">
        <SectionHeading
          title="Vos défis web actuels"
          description="Des problématiques courantes qui freinent votre développement digital"
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div key={challenge.title} variants={item}>
                <GradientCard className="h-full group">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    <p className="text-lg font-semibold text-gradient">{challenge.stat}</p>
                  </div>
                </GradientCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}