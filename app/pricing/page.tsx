"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const pricingPackages = [
  {
    name: "Web Development",
    packages: [
      {
        tier: "Basic",
        price: "AED 5,000",
        description: "Perfect for small businesses",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form",
          "Basic SEO",
          "1 month support",
        ],
        paymentLink: "https://stripe.com/pay/web-dev-basic",
      },
      {
        tier: "Professional",
        price: "AED 12,000",
        description: "For growing businesses",
        features: [
          "Up to 10 pages",
          "Custom design",
          "CMS integration",
          "Advanced SEO",
          "E-commerce ready",
          "3 months support",
        ],
        paymentLink: "https://stripe.com/pay/web-dev-pro",
      },
      {
        tier: "Enterprise",
        price: "AED 25,000+",
        description: "Custom solutions",
        features: [
          "Unlimited pages",
          "Full customization",
          "Advanced features",
          "API integrations",
          "Priority support",
          "6 months support",
        ],
        paymentLink: "https://stripe.com/pay/web-dev-enterprise",
      },
    ],
  },
  {
    name: "SEO Services",
    packages: [
      {
        tier: "Starter",
        price: "AED 2,500/month",
        description: "Essential SEO optimization",
        features: [
          "Keyword research",
          "On-page optimization",
          "Monthly reports",
          "10 keywords targeted",
        ],
        paymentLink: "https://stripe.com/pay/seo-starter",
      },
      {
        tier: "Growth",
        price: "AED 5,000/month",
        description: "Comprehensive SEO strategy",
        features: [
          "Advanced keyword research",
          "Link building",
          "Content optimization",
          "30 keywords targeted",
          "Competitor analysis",
        ],
        paymentLink: "https://stripe.com/pay/seo-growth",
      },
      {
        tier: "Enterprise",
        price: "AED 10,000+/month",
        description: "Full SEO management",
        features: [
          "Complete SEO audit",
          "Unlimited keywords",
          "Technical SEO",
          "Local SEO",
          "Dedicated account manager",
        ],
        paymentLink: "https://stripe.com/pay/seo-enterprise",
      },
    ],
  },
  {
    name: "Digital Marketing",
    packages: [
      {
        tier: "Essential",
        price: "AED 3,500/month",
        description: "Basic marketing services",
        features: [
          "Social media management",
          "Content creation",
          "Monthly strategy",
          "2 platforms",
        ],
        paymentLink: "https://stripe.com/pay/marketing-essential",
      },
      {
        tier: "Advanced",
        price: "AED 7,500/month",
        description: "Full marketing suite",
        features: [
          "Multi-platform management",
          "Paid advertising",
          "Email campaigns",
          "Analytics & reporting",
          "Content calendar",
        ],
        paymentLink: "https://stripe.com/pay/marketing-advanced",
      },
      {
        tier: "Complete",
        price: "AED 15,000+/month",
        description: "End-to-end marketing",
        features: [
          "All platforms",
          "Advanced campaigns",
          "Marketing automation",
          "Dedicated team",
          "Custom strategies",
        ],
        paymentLink: "https://stripe.com/pay/marketing-complete",
      },
    ],
  },
  {
    name: "Mobile App Development",
    packages: [
      {
        tier: "Basic",
        price: "AED 15,000",
        description: "Simple mobile application",
        features: [
          "iOS or Android",
          "Basic features",
          "App store submission",
          "2 months support",
        ],
        paymentLink: "https://stripe.com/pay/mobile-basic",
      },
      {
        tier: "Professional",
        price: "AED 35,000",
        description: "Full-featured app",
        features: [
          "iOS & Android",
          "Advanced features",
          "Backend integration",
          "Push notifications",
          "6 months support",
        ],
        paymentLink: "https://stripe.com/pay/mobile-pro",
      },
      {
        tier: "Enterprise",
        price: "AED 75,000+",
        description: "Complex app solution",
        features: [
          "Native development",
          "Custom features",
          "Full backend",
          "Analytics & tracking",
          "12 months support",
        ],
        paymentLink: "https://stripe.com/pay/mobile-enterprise",
      },
    ],
  },
  {
    name: "Hosting & Maintenance",
    packages: [
      {
        tier: "Basic",
        price: "AED 500/month",
        description: "Essential hosting",
        features: [
          "Shared hosting",
          "SSL certificate",
          "Monthly backups",
          "Email support",
        ],
        paymentLink: "https://stripe.com/pay/hosting-basic",
      },
      {
        tier: "Professional",
        price: "AED 1,500/month",
        description: "Managed hosting",
        features: [
          "Cloud hosting",
          "Daily backups",
          "Performance monitoring",
          "Priority support",
          "Security updates",
        ],
        paymentLink: "https://stripe.com/pay/hosting-pro",
      },
      {
        tier: "Enterprise",
        price: "AED 3,500+/month",
        description: "Dedicated hosting",
        features: [
          "Dedicated server",
          "24/7 monitoring",
          "Custom configurations",
          "Dedicated support",
          "SLA guarantee",
        ],
        paymentLink: "https://stripe.com/pay/hosting-enterprise",
      },
    ],
  },
];

export default function PricingPage() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("pricingPlans")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("pricingPageSubtitle")}
        </p>
      </motion.div>

      <div className="space-y-16">
        {pricingPackages.map((service, serviceIndex) => (
          <div key={service.name}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              {service.name}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.packages.map((pkg, pkgIndex) => (
                <motion.div
                  key={pkg.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: pkgIndex * 0.1 }}
                  className={pkg.tier === "Professional" || pkg.tier === "Advanced" || pkg.tier === "Growth" ? "md:-mt-4" : ""}
                >
                  <Card className={`h-full flex flex-col ${pkg.tier === "Professional" || pkg.tier === "Advanced" || pkg.tier === "Growth" ? "border-primary border-2" : ""}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.tier}</CardTitle>
                      <div className="text-3xl font-bold mt-2">{pkg.price}</div>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full"
                        variant={pkg.tier === "Professional" || pkg.tier === "Advanced" || pkg.tier === "Growth" ? "default" : "outline"}
                      >
                        <a href={pkg.paymentLink} target="_blank" rel="noopener noreferrer">
                          {t("payNow")}
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center p-8 bg-muted rounded-lg"
      >
        <h3 className="text-2xl font-bold mb-4">{t("needCustomSolution")}</h3>
        <p className="text-muted-foreground mb-6">
          {t("customSolutionDesc")}
        </p>
        <Button asChild size="lg">
          <a href="/contact">{t("getCustomQuote")}</a>
        </Button>
      </motion.div>
    </div>
  );
}

