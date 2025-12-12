"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
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
  Star,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

// Services will be translated in the component

// Testimonials and FAQs are now translated inline

export default function Home() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              08 Tech Group - {t("heroTitle")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/order">{t("orderNow")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href="https://wa.me/971588966841?text=Hi%20I%20want%20to%20order%20a%20service" target="_blank" rel="noopener noreferrer">
                  {t("whatsappUs")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourServices")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("servicesSubtitle")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, titleKey: "webDevelopment", descKey: "webDevDesc" },
              // Hidden services: mobileApps, uiUxDesign, branding, maintenancePlans, emailCampaigns
              { icon: Search, titleKey: "seo", descKey: "seoDesc" },
              { icon: TrendingUp, titleKey: "digitalMarketing", descKey: "digitalMarketingDesc" },
              { icon: Instagram, titleKey: "socialMediaManagement", descKey: "socialMediaDesc" },
              { icon: FileText, titleKey: "contentCreation", descKey: "contentCreationDesc" },
            ].map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{t(service.titleKey)}</CardTitle>
                    <CardDescription>{t(service.descKey)}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                {t("viewAllServices")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whyChooseUs")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("whyChooseUsDesc")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, titleKey: "fastDelivery", descKey: "fastDeliveryDesc" },
              { icon: Star, titleKey: "premiumQuality", descKey: "premiumQualityDesc" },
              { icon: CheckCircle, titleKey: "provenResults", descKey: "provenResultsDesc" },
            ].map((item, index) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("flexiblePricing")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pricingSubtitle")}
            </p>
          </motion.div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/pricing">{t("viewPricingPlans")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whatClientsSay")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "أحمد عبد الله",
                roleKey: "testimonial1Role",
                contentKey: "testimonial1Content",
                rating: 5,
              },
              {
                name: "سارة حسن",
                roleKey: "testimonial2Role",
                contentKey: "testimonial2Content",
                rating: 5,
              },
              {
                name: "محمد النجار",
                roleKey: "testimonial3Role",
                contentKey: "testimonial3Content",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base">{t(testimonial.contentKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("faq")}</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "faq1Question", a: "faq1Answer" },
              { q: "faq2Question", a: "faq2Answer" },
              { q: "faq3Question", a: "faq3Answer" },
              { q: "faq4Question", a: "faq4Answer" },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left">{t(faq.q)}</CardTitle>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{t(faq.a)}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("readyToGetStarted")}</h2>
            <p className="text-lg mb-8 opacity-90">
              {t("ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-white text-blue-600 bg-white hover:bg-white hover:text-blue-700">
                <Link href="/order">{t("orderNow")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

