"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  const pathname = usePathname() || "";

  const navItems = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/build-sudan-with-code", label: "المبادرة", icon: Heart },
    { href: "/completed-projects", label: "المشاريع", icon: CheckCircle },
    { href: "/projects-in-progress", label: "قيد التنفيذ", icon: Clock },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
      <div className="flex items-stretch justify-between min-h-[70px] px-1 py-1">
        {/* الأول: الرئيسية */}
        {navItems.slice(0, 2).map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 min-w-0 transition-colors py-1 gap-0.5",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("h-[18px] w-[18px] flex-shrink-0", isActive && "scale-105")} />
              <span className="text-[9px] font-medium leading-[1.1] text-center px-0.5 break-words">{item.label}</span>
            </Link>
          );
        })}
        
        {/* الزر الكبير: قدم فكرة */}
        <div className="flex items-center justify-center px-1.5">
          <Button asChild size="sm" className="h-10 px-3 text-xs font-semibold whitespace-nowrap">
            <Link href="/build-sudan-with-code#register">قدم فكرة</Link>
          </Button>
        </div>

        {/* الأخير: المشاريع، قيد التنفيذ */}
        {navItems.slice(2).map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 min-w-0 transition-colors py-1 gap-0.5",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("h-[18px] w-[18px] flex-shrink-0", isActive && "scale-105")} />
              <span className="text-[9px] font-medium leading-[1.1] text-center px-0.5 break-words">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
