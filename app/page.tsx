"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Code, Users, Lightbulb, ArrowRight, CheckCircle, HandHeart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-green-50 dark:from-amber-950/20 dark:via-gray-900 dark:to-green-950/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              نبني السودان بالكود
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              مبادرة تقنية سودانية بنية صادقة، بنستخدم البرمجة عشان نخدم الناس ونسهّل حياتهم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/build-sudan-with-code#register">قدّم فكرة / اطلب مشروع</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/build-sudan-with-code#volunteer">انضم كمتطوع</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Initiative */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">عن المبادرة</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                مبادرة تطوعية غير ربحية هدفها تقديم حلول تقنية مجانية لأفراد ومؤسسات سودانية تحتاج دعم تقني حقيقي.
              </p>
              <p>
                الفكرة بسيطة: نستخدم مهاراتنا في البرمجة والتطوير عشان نبني حلول تقنية تساعد الناس وتسهّل حياتهم.
              </p>
              <p className="font-semibold text-foreground text-xl mt-6">
                النية صدقة جارية من خلال التقنية لاهلنا واحبابنا في السودان
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ماهي الحاجات البنعملها</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              حلول تقنية بسيطة وواضحة تساعد الناس
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/build-sudan-with-code">
                اعرف أكتر عن المبادرة <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف بتشتغل المبادرة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              خطوات بسيطة وواضحة
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "1",
                  title: "تقديم الفكرة",
                  description: "قدم فكرتك أو طلبك من خلال النموذج",
                },
                {
                  step: "2",
                  title: "المراجعة",
                  description: "نراجع الطلب ونحدد إمكانية التنفيذ",
                },
                {
                  step: "3",
                  title: "التنفيذ",
                  description: "نبدأ في بناء المشروع حسب الوقت المتاح",
                },
                {
                  step: "4",
                  title: "التسليم",
                  description: "نوصل الكود والمشروع جاهز للاستخدام",
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
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مين ممكن يشارك</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle>إذا عندك فكرة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  إذا عندك فكرة لمشروع تقني يمكن أن يساعد المجتمع السوداني، قدم طلبك.
                </p>
                <ul className="space-y-2">
                  {[
                    "جمعيات ومؤسسات غير ربحية",
                    "مشاريع مجتمعية",
                    "أفراد لديهم أفكار مفيدة",
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
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>إذا عندك مهارات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  إذا عندك مهارات في البرمجة أو التصميم وعايز تساعد، انضم إلينا.
                </p>
                <ul className="space-y-2">
                  {[
                    "مطوري الويب",
                    "مصممي واجهات المستخدم",
                    "أي شخص عنده مهارات تقنية",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HandHeart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز تشارك معانا؟</h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              قدم فكرتك أو انضم كمتطوع ونساعد بعض في بناء السودان بالكود
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/build-sudan-with-code#register">قدم فكرة / اطلب مشروع</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/build-sudan-with-code#volunteer">انضم كمتطوع</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 08 Tech Group Section (20%) */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">08 Tech Group</h2>
            <p className="text-muted-foreground mb-6">
              المبادرة تديرها وتنفذها بالكامل <strong>08 Tech Group</strong>. نحن فريق تقني سوداني متخصص في تطوير الويب والتطبيقات.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">اعرف أكتر عننا</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
