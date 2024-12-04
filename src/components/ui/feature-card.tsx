import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group rounded-lg p-6 bg-card border border-border",
        "hover:shadow-lg transition-all duration-300",
        "hover:border-primary/20",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4",
          "group-hover:scale-110 transition-transform duration-300",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}