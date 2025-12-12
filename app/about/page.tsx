"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

// Values are now translated inline

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutUs")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t("aboutSubtitle")}
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("ourStory")}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("ourStoryP1")}</p>
              <p>{t("ourStoryP2")}</p>
              <p>{t("ourStoryP3")}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg p-8 h-64 flex items-center justify-center">
            <p className="text-6xl font-bold text-blue-600 dark:text-blue-300">UAE</p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">{t("ourMission")}</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            {t("ourMissionDesc")}
          </p>
        </Card>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">{t("ourValues")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, titleKey: "excellence", descKey: "excellenceDesc" },
            { icon: Users, titleKey: "clientFirst", descKey: "clientFirstDesc" },
            { icon: Award, titleKey: "innovation", descKey: "innovationDesc" },
            { icon: Heart, titleKey: "integrity", descKey: "integrityDesc" },
          ].map((value, index) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t(value.titleKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(value.descKey)}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">{t("ourTeam")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { nameKey: "teamMember1Name", roleKey: "teamMember1Role" },
            { nameKey: "teamMember2Name", roleKey: "teamMember2Role" },
            { nameKey: "teamMember3Name", roleKey: "teamMember3Role" },
          ].map((member, index) => (
            <motion.div
              key={member.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {t(member.nameKey).split(" ").map((n: string) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold mb-1">{t(member.nameKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(member.roleKey)}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

