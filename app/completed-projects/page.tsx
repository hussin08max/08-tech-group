"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Code, Users } from "lucide-react";

export default function CompletedProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">المشاريع المنفذة</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          هذه المشاريع التي تم إكمالها وتسليمها من خلال المبادرة. جميعها مشاريع تطوعية غير ربحية.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold text-muted-foreground">قريباً</p>
                <p className="text-sm text-muted-foreground mt-2">
                  يمكنك متابعة المشاريع هنا
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  جميع المشاريع المذكورة هنا تم إنجازها وتسليمها من خلال المبادرة التطوعية غير الربحية.
                </p>
                <p>
                  المشاريع تُسلم بالكود المصدري كما هو، بدون ضمانات أو دعم تقني مستمر. الدعم الاستشاري فقط متاح.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
