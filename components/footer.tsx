"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  
  // Static footer text - can be updated directly in this file
  const footerText = "08 Tech Group Premium digital services for businesses across the UAE. We help you grow online.";

  const services = [
    { href: "/services#web-dev", label: "Web Development" },
    { href: "/services#mobile", label: "Mobile Apps" },
    { href: "/services#seo", label: "SEO" },
    { href: "/services#marketing", label: "Digital Marketing" },
  ];

  const company = [
    { href: "/about", label: t("aboutUs") },
    { href: "/contact", label: t("contact") },
    { href: "/pricing", label: t("pricing") },
    { href: "/order", label: t("orderNow") },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-sm text-muted-foreground">
              {footerText}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("company")}</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@uaedigital.ae" className="hover:text-primary transition-colors">
                  info@uaedigital.ae
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+971588966841" className="hover:text-primary transition-colors">
                  +971 588966841
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} UAE Digital Services Agency. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}

