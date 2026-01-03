"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Users, Lightbulb, Flag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          08 Tech Group - فريق تقني سوداني متخصص في تطوير الويب والتطبيقات
        </p>
      </motion.div>

      {/* Founder Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-6">قصة المؤسس</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    أنا حسين عبد الله مطور برمجيات سوداني متواضع زي اي اصغر مبرمج سوداني في السودان، عشت وترعرت وتعلمت في السودان وعملت في السودان وفي الخارج ولقيت انو عندنا فجوة تقنية لو ما سديناها نحن مافي زول بجي من برا ويسدها لينا، صاح قعدت برا كتير لكن قلبي كان دايماً في السودان.
                  </p>
                  <p>
                    بعد ما شفت التحديات اللي بتمر بيها بلدنا، فكرت: إيه اللي ممكن أعمله؟ مهاراتي في البرمجة والتطوير كيف ممكن تساعد الناس والبلد؟
                  </p>
                  <p>
                    الفكرة كانت بسيطة: نستخدم التقنية عشان نخدم الناس. مش مشاريع تجارية ضخمة، لكن حلول بسيطة وواضحة تساعد في الحياة اليومية.
                  </p>
                  <p className="font-semibold text-foreground">
                    كده ظهرت فكرة المبادرة: &quot;نبني السودان بالكود&quot; - مبادرة تطوعية غير ربحية هدفها الصدقة الجارية من خلال التقنية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Why This Initiative */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">ليه هذه المبادرة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "النية الصادقة",
              description: "نريد نساهم في بناء السودان بشكل حقيقي ومفيد، بدون أي أهداف تجارية أو مكاسب مادية",
            },
            {
              icon: Code,
              title: "التقنية كوسيلة",
              description: "التقنية هي الطريقة اللي بنعرف نستخدمها بشكل جيد، فقررنا نستخدمها في خدمة الناس",
            },
            {
              icon: Flag,
              title: "حب السودان",
              description: "بلدنا عندنا مسؤولية تجاهه. المبادرة دي طريقة صغيرة نساهم بيها في إعادة البناء",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Technology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <Code className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">ليه التقنية</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    التقنية اليوم بتسهّل حياتنا بشكل كبير. لكن كثير من الناس والمؤسسات في السودان ما عندهم إمكانيات مادية لبناء حلول تقنية.
                  </p>
                  <p>
                    المبادرة هدفها نسد الفجوة دي: نقدم حلول تقنية مجانية لأولئك اللي محتاجينها فعلاً.
                  </p>
                  <p>
                    المواقع البسيطة، التطبيقات الأساسية، الأدوات الصغيرة - كل دي ممكن تساعد بشكل حقيقي إذا كانت موجودة ومتاحة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Why Sudan */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <Flag className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">ليه السودان</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                السودان بلدنا، وفينا مسؤولية تجاهه. بعد كل اللي مرت بيها البلاد، لازم نبدأ نبنى من جديد.
              </p>
              <p>
                المبادرة دي مش سياسية ولا حزبية - دي مبادرة مجتمعية هدفها البناء والإعمار من خلال التقنية.
              </p>
              <p className="font-semibold text-foreground">
                كل واحد فينا ممكن يساهم بطريقته. ونحن قررنا نساهم بالتقنية.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Management */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">إدارة المبادرة</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center">
              <p>
                <strong className="text-foreground">المبادرة تديرها وتنفذها بالكامل 08 Tech Group.</strong>
              </p>
              <p>
                نحن فريق تقني متخصص في تطوير الويب والتطبيقات، وقررنا نخصص جزء من وقتنا ومهاراتنا للمبادرة دي.
              </p>
              <p>
                المبادرة غير ربحية بالكامل - ما في أموال، ما في مكاسب، ما في أهداف تجارية. فقط الرغبة في المساهمة.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">عايز تعرف أكتر عن المبادرة؟</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/build-sudan-with-code">اعرف أكتر عن المبادرة</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
