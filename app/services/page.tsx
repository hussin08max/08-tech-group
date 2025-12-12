"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
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


export default function ServicesPage() {
  const { t } = useI18n();
  
  const servicesWithKeys = [
    {
      id: "web-dev",
      icon: Globe,
      titleKey: "serviceWebDevTitle",
      descKey: "serviceWebDevDesc",
      featureKeys: ["serviceWebDevFeature1", "serviceWebDevFeature2", "serviceWebDevFeature3", "serviceWebDevFeature4", "serviceWebDevFeature5", "serviceWebDevFeature6"],
    },
    {
      id: "seo",
      icon: Search,
      titleKey: "serviceSEOTitle",
      descKey: "serviceSEODesc",
      featureKeys: ["serviceSEOFeature1", "serviceSEOFeature2", "serviceSEOFeature3", "serviceSEOFeature4", "serviceSEOFeature5", "serviceSEOFeature6"],
    },
    {
      id: "marketing",
      icon: TrendingUp,
      titleKey: "serviceDigitalMarketingTitle",
      descKey: "serviceDigitalMarketingDesc",
      featureKeys: ["serviceDigitalMarketingFeature1", "serviceDigitalMarketingFeature2", "serviceDigitalMarketingFeature3", "serviceDigitalMarketingFeature4", "serviceDigitalMarketingFeature5", "serviceDigitalMarketingFeature6"],
    },
    {
      id: "social",
      icon: Instagram,
      titleKey: "serviceSocialMediaTitle",
      descKey: "serviceSocialMediaDesc",
      featureKeys: ["serviceSocialMediaFeature1", "serviceSocialMediaFeature2", "serviceSocialMediaFeature3", "serviceSocialMediaFeature4", "serviceSocialMediaFeature5", "serviceSocialMediaFeature6"],
    },
    {
      id: "content",
      icon: FileText,
      titleKey: "serviceContentTitle",
      descKey: "serviceContentDesc",
      featureKeys: ["serviceContentFeature1", "serviceContentFeature2", "serviceContentFeature3", "serviceContentFeature4", "serviceContentFeature5", "serviceContentFeature6"],
    },
    {
      id: "ads",
      icon: Target,
      titleKey: "serviceAdsTitle",
      descKey: "serviceAdsDesc",
      featureKeys: ["serviceAdsFeature1", "serviceAdsFeature2", "serviceAdsFeature3", "serviceAdsFeature4", "serviceAdsFeature5", "serviceAdsFeature6"],
    },
    {
      id: "copywriting",
      icon: Code,
      titleKey: "serviceCopywritingTitle",
      descKey: "serviceCopywritingDesc",
      featureKeys: ["serviceCopywritingFeature1", "serviceCopywritingFeature2", "serviceCopywritingFeature3", "serviceCopywritingFeature4", "serviceCopywritingFeature5", "serviceCopywritingFeature6"],
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      titleKey: "serviceEcommerceTitle",
      descKey: "serviceEcommerceDesc",
      featureKeys: ["serviceEcommerceFeature1", "serviceEcommerceFeature2", "serviceEcommerceFeature3", "serviceEcommerceFeature4", "serviceEcommerceFeature5", "serviceEcommerceFeature6"],
    },
    {
      id: "hosting",
      icon: Server,
      titleKey: "serviceHostingTitle",
      descKey: "serviceHostingDesc",
      featureKeys: ["serviceHostingFeature1", "serviceHostingFeature2", "serviceHostingFeature3", "serviceHostingFeature4", "serviceHostingFeature5", "serviceHostingFeature6"],
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      titleKey: "serviceWhatsAppTitle",
      descKey: "serviceWhatsAppDesc",
      featureKeys: ["serviceWhatsAppFeature1", "serviceWhatsAppFeature2", "serviceWhatsAppFeature3", "serviceWhatsAppFeature4", "serviceWhatsAppFeature5", "serviceWhatsAppFeature6"],
    },
    {
      id: "crm",
      icon: Zap,
      titleKey: "serviceCRMTitle",
      descKey: "serviceCRMDesc",
      featureKeys: ["serviceCRMFeature1", "serviceCRMFeature2", "serviceCRMFeature3", "serviceCRMFeature4", "serviceCRMFeature5", "serviceCRMFeature6"],
    },
    {
      id: "ai",
      icon: Zap,
      titleKey: "serviceAITitle",
      descKey: "serviceAIDesc",
      featureKeys: ["serviceAIFeature1", "serviceAIFeature2", "serviceAIFeature3", "serviceAIFeature4", "serviceAIFeature5", "serviceAIFeature6"],
    },
    {
      id: "automation",
      icon: Zap,
      titleKey: "serviceAutomationTitle",
      descKey: "serviceAutomationDesc",
      featureKeys: ["serviceAutomationFeature1", "serviceAutomationFeature2", "serviceAutomationFeature3", "serviceAutomationFeature4", "serviceAutomationFeature5", "serviceAutomationFeature6"],
    },
  ];
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("servicesPageTitle")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("servicesPageSubtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesWithKeys.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{t(service.titleKey)}</CardTitle>
                <CardDescription>{t(service.descKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.featureKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      <span>{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

