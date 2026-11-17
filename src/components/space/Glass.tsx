import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Glass({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-glass", className)}>
      <div className="space-glass-shine" aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
