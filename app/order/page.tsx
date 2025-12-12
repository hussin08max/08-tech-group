"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { HubSpotForm } from "@/components/hubspot-form";

export default function OrderPage() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("placeYourOrder")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("orderSubtitle")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{t("orderDetails")}</CardTitle>
            <CardDescription>
              {t("orderDetailsDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <HubSpotForm />

            {/* WhatsApp Alternative */}
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                {t("preferWhatsApp")}
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-green-600 text-green-700 hover:bg-green-100 dark:hover:bg-green-900"
              >
                <a
                  href="https://wa.me/971588966841?text=Hi, I want to order a service. Please contact me."
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
  );
}

