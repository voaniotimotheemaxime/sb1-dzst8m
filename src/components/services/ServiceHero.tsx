import { BackgroundBeams } from "@/components/ui/background-beams";

export function ServiceHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center pt-16 overflow-hidden">
      <BackgroundBeams />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Solutions Digitales Sur Mesure
          </h1>
          <p className="text-xl text-muted-foreground">
            De la conception à la réalisation, nous vous accompagnons dans la création
            de votre projet digital avec expertise et passion.
          </p>
        </div>
      </div>
    </section>
  );
}