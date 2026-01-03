"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          نحن هنا لمساعدتك. تواصل معنا من خلال أي من الطرق التالية
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>معلومات الاتصال</CardTitle>
              <CardDescription>تواصل معنا من خلال أي من هذه الطرق</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <a href="mailto:info@08techgroup.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@08techgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">الهاتف</p>
                  <a href="tel:+249917897809" className="text-muted-foreground hover:text-primary transition-colors">
                    +249 917 897 809
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">الموقع</p>
                  <p className="text-muted-foreground">
                    السودان
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Volunteer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <CardTitle>انضم إلى المبادرة</CardTitle>
              </div>
              <CardDescription>
                إذا كنت تريد الانضمام إلى المبادرة كمتطوع، تواصل معنا عبر واتساب بالرقم المذكور أعلاه
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/249917897809?text=مرحباً، أريد الانضمام إلى المبادرة كمتطوع"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#20BA5A] transition-colors"
              >
                <MessageCircle className="h-5 w-5 ml-2" />
                تواصل عبر واتساب
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
