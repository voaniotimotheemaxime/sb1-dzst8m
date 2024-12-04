import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost";
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative group"
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <div 
          className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-60 group-hover:opacity-70 transition duration-1000 group-hover:duration-500"
          style={{
            animation: "pulseGlow 4s ease-in-out infinite"
          }}
        />
        <Button
          ref={ref}
          className={cn(
            "relative text-white bg-background/90 hover:bg-background/70",
            "shadow-[0_0_1.5rem_-0.5rem] shadow-primary/20 hover:shadow-primary/30",
            "backdrop-blur-sm transition-all duration-500",
            "font-medium tracking-wide",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

GradientButton.displayName = "GradientButton";