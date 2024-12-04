import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GradientCard = forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-card",
          "border border-transparent",
          "hover:border-primary/20",
          "transition-all duration-300",
          "hover:shadow-lg",
          "relative overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-primary/5 before:to-secondary/5",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);