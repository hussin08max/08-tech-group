"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertCircle, Heart, Code, Users, Lightbulb } from "lucide-react";
import Link from "next/link";
import { HubSpotForm } from "@/components/hubspot-form";

export default function InitiativePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
          نبني السودان بالكود
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          مبادرة تقنية سودانية بنية صادقة، بنستخدم البرمجة عشان نخدم الناس ونسهّل حياتهم
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="#register">قدّم فكرة / اطلب مشروع</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link href="#volunteer">انضم كمتطوع</Link>
          </Button>
        </div>
      </motion.div>

      {/* Vision & Intention */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-4">الرؤية والنية</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  هذه مبادرة تطوعية غير ربحية هدفها تقديم حلول تقنية مجانية لأفراد ومؤسسات سودانية تحتاج دعم تقني حقيقي.
                </p>
                <p>
                  الفكرة بسيطة: نستخدم مهاراتنا في البرمجة والتطوير عشان نبني حلول تقنية تساعد الناس وتسهّل حياتهم.
                </p>
                <p className="font-semibold text-foreground">
                  صدقة جارية من خلال التقنية.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* What We Offer */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">ماهي الحاجات البنقدمها</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Code,
              title: "مواقع ويب",
              description: "مواقع ويب واضحة للمشاريع الصغيرة والجمعيات",
            },
            {
              icon: Code,
              title: "تطبيقات ويب أساسية",
              description: "تطبيقات تساعد الناس في إدارة العمليات اليومية",
            },
            {
              icon: Code,
              title: "أدوات وأتمتة",
              description: "أدوات تقنية تسهّل المهام المتكررة",
            },
            {
              icon: Code,
              title: "تطبيقات جوال خدمية",
              description: "تطبيقات تساعد الناس في الخدمات والمرافق",
            },
            {
              icon: Code,
              title: "انظمة مدارس ومستشفيات",
              description: "انظمة للمدارس والمستشفيات لتسهيل الحياة علي المواطنين",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What We DON'T Offer */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">ماهي الحاجات الما بنقدمها</h2>
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-6 w-6 text-destructive" />
              <CardTitle>مهم جداً: الحاجات الما بنقدمها</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "مشاريع تجارية ربحية أو شخصية ومابتستخدم البلد",
                "تطبيقات موبايل (iOS/Android) ماعندها خدمة للبلد",
                "أنظمة دفع أو تجارة إلكترونية خاصة بافراد وربح خاص",
                "مواقع كبيرة بتقنيات معقدة للربح الفردي او التجاري",
                "دعم تقني مستمر أو صيانة كاملة بعد الاطلاق",
                "ضمانات أو وعود بمواعيد محددة",
                "تمويل أو تمويل للمشاريع",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* How Projects Are Selected */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">كيف بنختار المشاريع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-primary mb-4" />
              <CardTitle>المعايير</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "الفائدة للمجتمع السوداني",
                  "الوضوح والبساطة في الطلب",
                  "القدرة على التنفيذ بالوقت المتاح",
                  "عدم وجود هدف تجاري مباشر",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
              <CardTitle>ملاحظات مهمة</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• لا توجد ضمانات بقبول الطلب</li>
                <li>• الأولوية للمشاريع الأكثر فائدة</li>
                <li>• القرار يعتمد على الوقت والقدرة المتاحة</li>
                <li>• قد يستغرق الرد وقتاً</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Execution Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">كيفية التنفيذ</h2>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "تقديم الطلب",
              description: "تقديم فكرة المشروع أو الطلب من خلال النموذج",
            },
            {
              step: "2",
              title: "المراجعة",
              description: "مراجعة الطلب والتواصل للتفاصيل الإضافية",
            },
            {
              step: "3",
              title: "القبول أو الرفض",
              description: "إبلاغك بقرار قبول أو رفض الطلب",
            },
            {
              step: "4",
              title: "التنفيذ",
              description: "في حالة القبول، يتم البدء في التنفيذ حسب الوقت المتاح",
            },
            {
              step: "5",
              title: "التسليم",
              description: "تسليم الكود والمشروع كما هو، بدون ضمانات أو دعم مستمر",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Registration Section */}
      <motion.section
        id="register"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">قدم فكرتك أو طلبك</CardTitle>
            <CardDescription className="text-lg">
              املأ النموذج التالي وسنراجع طلبك في أقرب وقت ممكن
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HubSpotForm />
          </CardContent>
        </Card>
      </motion.section>

      {/* Volunteer Section */}
      <motion.section
        id="volunteer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">انضم كمتطوع</CardTitle>
            </div>
            <CardDescription className="text-lg">
              إذا عندك مهارات في البرمجة أو التصميم وعايز تساعد، مرحب بيك
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                المبادرة تحتاج متطوعين في:
              </p>
              <ul className="space-y-2">
                {[
                  "تطوير الويب (Frontend/Backend)",
                  "تصميم واجهات المستخدم",
                  "اختبار المشاريع",
                  "مراجعة الكود",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Disclaimer */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
          <CardHeader>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <CardTitle>إخلاء المسؤولية والتوقعات</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">هذه مبادرة تطوعية غير ربحية:</strong> جميع الأعمال تتم بشكل تطوعي ولا يوجد أي التزامات قانونية أو تجارية.
              </p>
              <p>
                <strong className="text-foreground">لا توجد وعود بمواعيد:</strong> التنفيذ يعتمد على الوقت المتاح للمتطوعين، ولا توجد ضمانات بمواعيد محددة.
              </p>
              <p>
                <strong className="text-foreground">الكود يُسلم كما هو:</strong> المشاريع تُسلم بالكود المصدري بدون ضمانات أو دعم تقني مستمر.
              </p>
              <p>
                <strong className="text-foreground">الدعم استشاري فقط:</strong> أي دعم بعد التسليم هو استشاري وليس تشغيلي.
              </p>
              <p>
                <strong className="text-foreground">المبادرة لا تجمع أموال:</strong> هذه مبادرة تطوعية بالكامل ولا يتم جمع أي أموال أو تبرعات.
              </p>
              <p>
                <strong className="text-foreground">المبادرة تديرها وتنفذها 08 Tech Group:</strong> جميع الأعمال تتم من خلال فريق 08 Tech Group والمتطوعين المسجلين.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
