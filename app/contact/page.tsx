"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(t("errorSending"));
      }
    } catch (err) {
      setError(t("errorSending"));
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t("phonePlaceholder")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                {success && (
                  <p className="text-sm text-green-500">
                    {t("messageSent")}
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? t("sending") : t("sendMessageBtn")}
                </Button>
              </form>
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
                  <a href="mailto:info@uaedigital.ae" className="text-muted-foreground hover:text-primary transition-colors">
                    info@uaedigital.ae
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

