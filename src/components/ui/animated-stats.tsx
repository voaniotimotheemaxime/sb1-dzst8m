import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedStatsProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedStats({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedStatsProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.span
      ref={ref}
      className={cn("font-bold", className)}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView && (
        <motion.span
          initial={{ value: 0 }}
          animate={{ value }}
          transition={{ duration }}
        >
          {prefix}
          {Math.round(value)}
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}