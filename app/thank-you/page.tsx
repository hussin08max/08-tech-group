"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function ThankYouPage() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {t("thankYou")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground mb-8"
        >
          {t("thankYouMessage")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{t("whatsNext")}</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">{t("reviewRequest")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("reviewRequestDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">{t("weWillContact")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("weWillContactDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">{t("projectKickoff")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("projectKickoffDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t space-y-4">
                <h3 className="font-semibold">{t("needImmediateAssistance")}</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="flex-1">
                    <a href="mailto:info@08techgroup.com">
                      <Mail className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                      {t("emailUs")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="tel:+971588966841">
                      <Phone className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                      {t("callUs")}
                    </a>
                  </Button>
                  <Button asChild className="flex-1 bg-[#25D366] hover:bg-[#20BA5A]">
                    <a href="https://wa.me/971588966841?text=Hi%20I%20just%20submitted%20an%20order" target="_blank" rel="noopener noreferrer">
                      {t("openWhatsApp")}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/">{t("backToHome")}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

