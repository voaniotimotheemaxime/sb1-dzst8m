import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={cn(
        "rounded-lg bg-card p-6",
        "hover:shadow-lg transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}