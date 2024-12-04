import { BackgroundBeams } from "@/components/ui/background-beams";

export function PortfolioHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center pt-16 overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez nos projets les plus récents et laissez-vous inspirer
            par notre expertise en création digitale.
          </p>
        </div>
      </div>
    </section>
  );
}