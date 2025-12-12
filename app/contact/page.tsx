"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { HubSpotForm } from "@/components/hubspot-form";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("getInTouch")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("contactSubtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form - HubSpot Embed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("sendMessage")}</CardTitle>
              <CardDescription>
                {t("contactFormDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HubSpotForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t("contactInfo")}</CardTitle>
              <CardDescription>{t("contactChannels")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{t("email")}</p>
                  <a href="mailto:info@08techgroup.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@08techgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{t("phone")}</p>
                  <a href="tel:+971588966841" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 588966841
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{t("location")}</p>
                  <p className="text-muted-foreground">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">{t("quickContact")}</CardTitle>
              <CardDescription className="text-green-700 dark:text-green-300">
                {t("chatInstantly")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/971588966841?text=Hi%20I%20want%20to%20order%20a%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#20BA5A] transition-colors"
              >
                {t("openWhatsApp")}
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

