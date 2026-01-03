"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/build-sudan-with-code", label: "المبادرة" },
    { href: "/projects-in-progress", label: "المشاريع قيد التنفيذ" },
    { href: "/completed-projects", label: "المشاريع المنفذة" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={400} 
              height={160} 
              className="h-16 md:h-20 w-auto object-contain"
              quality={100}
              unoptimized
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              مبادرة &quot;نبني السودان بالكود&quot; مبادرة تطوعية غير ربحية تديرها وتنفذها 08 Tech Group. هدفنا استخدام التقنية في خدمة المجتمع السوداني.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">مبادرة تطوعية غير ربحية</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@08techgroup.com" className="hover:text-primary transition-colors">
                  info@08techgroup.com
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+249917897809" className="hover:text-primary transition-colors">
                  +249 917 897 809
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} 08 Tech Group. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-xs">
            مبادرة &quot;نبني السودان بالكود&quot; مبادرة تطوعية غير ربحية - لا يتم جمع أموال أو تبرعات
          </p>
        </div>
      </div>
    </footer>
  );
}
