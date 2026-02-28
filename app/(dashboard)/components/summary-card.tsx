import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface SummaryCardProps {
  children: ReactNode;
  className?: string;
}

export const SummaryCard = ({ children, className }: SummaryCardProps) => {
  return (
    <div className={cn("rounded-xl bg-white p-6", className)}>{children}</div>
  );
};

export const SummaryCardIcon = ({ children, className }: SummaryCardProps) => {
  return (
    <div
      className={cn(
        "h-9 w-9 flex items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 mb-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({ children, className }: SummaryCardProps) => {
  return (
    <p className={cn("text-2xl font-medium text-slate-900", className)}>
      {children}
    </p>
  );
};

export const SummaryCardSubtitle = ({
  children,
  className,
}: SummaryCardProps) => {
  return (
    <p className={cn("text-sm font-medium text-slate-500", className)}>
      {children}
    </p>
  );
};
