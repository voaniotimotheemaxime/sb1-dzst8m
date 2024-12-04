import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />
    </div>
  );
}