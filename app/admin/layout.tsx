"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Settings, MessageSquare, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem("adminAuth");
    if (!auth && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  if (!mounted) return null;

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/admin/dashboard" className="text-xl font-bold">
                لوحة التحكم
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/admin/dashboard">
                  <Button
                    variant={pathname === "/admin/dashboard" ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>الرئيسية</span>
                  </Button>
                </Link>
                <Link href="/admin/orders">
                  <Button
                    variant={pathname === "/admin/orders" ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>طلبات المراسلة</span>
                  </Button>
                </Link>
                <Link href="/admin/settings">
                  <Button
                    variant={pathname === "/admin/settings" ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Settings className="h-4 w-4" />
                    <span>الإعدادات</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline">الموقع</Button>
              </Link>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 ml-2" />
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
