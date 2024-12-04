import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  description,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}