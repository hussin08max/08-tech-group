"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { HubSpotForm } from "@/components/hubspot-form";
import {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Instagram,
  FileText,
  Palette,
  Layers,
  ShoppingCart,
  Server,
  Wrench,
  MessageSquare,
  Mail,
  Target,
  Code,
  Zap,
} from "lucide-react";
import { useState } from "react";

const services = [
  { id: "web-dev", icon: Globe, name: "Web Development" },
  // Hidden: mobile apps
  // { id: "mobile", icon: Smartphone, name: "Mobile Apps" },
  { id: "seo", icon: Search, name: "SEO Services" },
  { id: "marketing", icon: TrendingUp, name: "Digital Marketing" },
  { id: "social", icon: Instagram, name: "Social Media Management" },
  { id: "content", icon: FileText, name: "Content Creation" },
  // Hidden: branding
  // { id: "branding", icon: Palette, name: "Branding" },
  // Hidden: ui-ux
  // { id: "ui-ux", icon: Layers, name: "UI/UX Design" },
  { id: "ads", icon: Target, name: "Ads Management" },
  { id: "copywriting", icon: Code, name: "Copywriting" },
  { id: "ecommerce", icon: ShoppingCart, name: "E-commerce Setup" },
  { id: "hosting", icon: Server, name: "Hosting Plans" },
  // Hidden: maintenance plans
  // { id: "maintenance", icon: Wrench, name: "Maintenance Plans" },
  { id: "whatsapp", icon: MessageSquare, name: "WhatsApp Automation" },
  { id: "crm", icon: Zap, name: "CRM Setup" },
  // Hidden: email campaigns
  // { id: "email", icon: Mail, name: "Email Campaigns" },
  { id: "ai", icon: Zap, name: "AI Tools Development" },
  { id: "automation", icon: Zap, name: "Automation Services" },
];

export default function OrderPage() {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("placeYourOrder")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("orderSubtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("selectService")}</CardTitle>
              <CardDescription>{t("selectServiceDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedService === service.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <service.icon className="h-6 w-6 text-primary mb-2" />
                    <p className="font-medium">{service.name}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("orderDetails")}</CardTitle>
              <CardDescription>
                {t("orderDetailsDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedService && (
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>{t("selectedService")}:</strong> {
                      services.find(s => s.id === selectedService)?.name
                    }
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    {t("mentionService")}
                  </p>
                </div>
              )}

              <HubSpotForm />

              {/* WhatsApp Alternative */}
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                  {t("preferWhatsApp")}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-600 text-green-700 hover:bg-green-100 dark:hover:bg-green-900"
                >
                  <a
                    href={`https://wa.me/971588966841?text=${encodeURIComponent(`Hi, I want to order: ${selectedService || 'a service'}. Please contact me.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("orderViaWhatsApp")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

