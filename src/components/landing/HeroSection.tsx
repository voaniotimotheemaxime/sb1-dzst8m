import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <AnimatedText
            text="Votre site design et professionnel en 72h pour 2x moins cher"
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            gradient
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Une approche unique : nous créons votre site avant tout paiement.
            Satisfaction garantie ou remboursé à 100%.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton size="lg" className="group">
              Découvrez votre futur site gratuitement
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </GradientButton>
            <Button size="lg" variant="outline" className="hover:bg-secondary/10">
              Comment ça marche ?
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}