import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "bg-primary hover:bg-primary/90 focus:ring-primary/50 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
