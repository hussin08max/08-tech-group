"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function PricingPage() {
  const { t } = useI18n();
  
  const pricingPackages = [
    {
      nameKey: "pricingWebDevName",
      packages: [
        {
          tierKey: "pricingWebDevBasicTier",
          priceAmount: "500",
          descKey: "pricingWebDevBasicDesc",
          featureKeys: ["pricingWebDevBasicFeature1", "pricingWebDevBasicFeature2", "pricingWebDevBasicFeature3", "pricingWebDevBasicFeature4", "pricingWebDevBasicFeature5"],
        },
        {
          tierKey: "pricingWebDevProfessionalTier",
          priceAmount: "2000",
          descKey: "pricingWebDevProfessionalDesc",
          featureKeys: ["pricingWebDevProfessionalFeature1", "pricingWebDevProfessionalFeature2", "pricingWebDevProfessionalFeature3", "pricingWebDevProfessionalFeature4", "pricingWebDevProfessionalFeature5", "pricingWebDevProfessionalFeature6"],
        },
        {
          tierKey: "pricingWebDevEnterpriseTier",
          priceAmount: "5000",
          descKey: "pricingWebDevEnterpriseDesc",
          featureKeys: ["pricingWebDevEnterpriseFeature1", "pricingWebDevEnterpriseFeature2", "pricingWebDevEnterpriseFeature3", "pricingWebDevEnterpriseFeature4", "pricingWebDevEnterpriseFeature5", "pricingWebDevEnterpriseFeature6"],
        },
      ],
    },
    {
      nameKey: "pricingSEOName",
      packages: [
        {
          tierKey: "pricingSEOStarterTier",
          priceAmount: "500",
          descKey: "pricingSEOStarterDesc",
          featureKeys: ["pricingSEOStarterFeature1", "pricingSEOStarterFeature2", "pricingSEOStarterFeature3", "pricingSEOStarterFeature4"],
        },
        {
          tierKey: "pricingSEOGrowthTier",
          priceAmount: "2500",
          descKey: "pricingSEOGrowthDesc",
          featureKeys: ["pricingSEOGrowthFeature1", "pricingSEOGrowthFeature2", "pricingSEOGrowthFeature3", "pricingSEOGrowthFeature4", "pricingSEOGrowthFeature5"],
        },
        {
          tierKey: "pricingSEOEnterpriseTier",
          priceAmount: "7500",
          descKey: "pricingSEOEnterpriseDesc",
          featureKeys: ["pricingSEOEnterpriseFeature1", "pricingSEOEnterpriseFeature2", "pricingSEOEnterpriseFeature3", "pricingSEOEnterpriseFeature4", "pricingSEOEnterpriseFeature5"],
        },
      ],
    },
    {
      nameKey: "pricingDigitalMarketingName",
      packages: [
        {
          tierKey: "pricingDigitalMarketingEssentialTier",
          priceAmount: "1500",
          descKey: "pricingDigitalMarketingEssentialDesc",
          featureKeys: ["pricingDigitalMarketingEssentialFeature1", "pricingDigitalMarketingEssentialFeature2", "pricingDigitalMarketingEssentialFeature3", "pricingDigitalMarketingEssentialFeature4"],
        },
        {
          tierKey: "pricingDigitalMarketingAdvancedTier",
          priceAmount: "4000",
          descKey: "pricingDigitalMarketingAdvancedDesc",
          featureKeys: ["pricingDigitalMarketingAdvancedFeature1", "pricingDigitalMarketingAdvancedFeature2", "pricingDigitalMarketingAdvancedFeature3", "pricingDigitalMarketingAdvancedFeature4"],
        },
        {
          tierKey: "pricingDigitalMarketingCompleteTier",
          priceAmount: "8000",
          descKey: "pricingDigitalMarketingCompleteDesc",
          featureKeys: ["pricingDigitalMarketingCompleteFeature1", "pricingDigitalMarketingCompleteFeature2", "pricingDigitalMarketingCompleteFeature3", "pricingDigitalMarketingCompleteFeature4", "pricingDigitalMarketingCompleteFeature5"],
        },
      ],
    },
    {
      nameKey: "pricingHostingName",
      packages: [
        {
          tierKey: "pricingHostingBasicTier",
          priceAmount: "1000",
          descKey: "pricingHostingBasicDesc",
          featureKeys: ["pricingHostingBasicFeature1", "pricingHostingBasicFeature2", "pricingHostingBasicFeature3", "pricingHostingBasicFeature4"],
        },
        {
          tierKey: "pricingHostingProfessionalTier",
          priceAmount: "3000",
          descKey: "pricingHostingProfessionalDesc",
          featureKeys: ["pricingHostingProfessionalFeature1", "pricingHostingProfessionalFeature2", "pricingHostingProfessionalFeature3", "pricingHostingProfessionalFeature4", "pricingHostingProfessionalFeature5"],
        },
        {
          tierKey: "pricingHostingEnterpriseTier",
          priceAmount: "5000",
          descKey: "pricingHostingEnterpriseDesc",
          featureKeys: ["pricingHostingEnterpriseFeature1", "pricingHostingEnterpriseFeature2", "pricingHostingEnterpriseFeature3", "pricingHostingEnterpriseFeature4", "pricingHostingEnterpriseFeature5"],
        },
      ],
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("pricingPlans")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("pricingPageSubtitle")}
        </p>
      </motion.div>

      <div className="space-y-16">
        {pricingPackages.map((service, serviceIndex) => (
          <div key={service.nameKey}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              {t(service.nameKey)}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.packages.map((pkg, pkgIndex) => {
                const tierText = t(pkg.tierKey);
                const isHighlighted = tierText === t("pricingWebDevProfessionalTier") || tierText === t("pricingDigitalMarketingAdvancedTier") || tierText === t("pricingSEOGrowthTier");
                return (
                  <motion.div
                    key={pkg.tierKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: pkgIndex * 0.1 }}
                    className={isHighlighted ? "md:-mt-4" : ""}
                  >
                    <Card className={`h-full flex flex-col ${isHighlighted ? "border-primary border-2" : ""}`}>
                      <CardHeader>
                        <CardTitle className="text-2xl">{tierText}</CardTitle>
                        <div className="text-3xl font-bold mt-2">
                          {t("startsFrom")} {pkg.priceAmount} {t("currency")}
                        </div>
                        <CardDescription>{t(pkg.descKey)}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {pkg.featureKeys.map((featureKey, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{t(featureKey)}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className="w-full"
                          variant={isHighlighted ? "default" : "outline"}
                        >
                          <Link href="/order">
                            {t("orderNow")}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
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

