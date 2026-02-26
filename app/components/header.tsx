import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export const HeaderContainer = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      {children}
    </div>
  );
};

export const HeaderTitle = ({ children, className }: HeaderProps) => {
  return (
    <h2 className={cn("font-semibold text-2xl", className)}>{children}</h2>
  );
};

export const HeaderSubtitle = ({ children, className }: HeaderProps) => {
  return (
    <p className={cn("text-primary text-sm font-semibold", className)}>
      {children}
    </p>
  );
};

export const HeaderLeft = ({ children, className }: HeaderProps) => {
  return <div className={cn("space-y-1", className)}>{children}</div>;
};

export const HeaderRight = ({ children, className }: HeaderProps) => {
  return <div className={cn("", className)}>{children}</div>;
};
