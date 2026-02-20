"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

const SidebarButton = ({ href, children }: SidebarButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant="ghost"
      asChild
      className={`text-slate-500 hover:text-primary hover:bg-green-50 justify-start text-sm font-semibold transition-all ${isActive && "bg-green-50 text-primary"}`}
    >
      <Link href={href} className="w-full">
        {children}
      </Link>
    </Button>
  );
};

export default SidebarButton;
