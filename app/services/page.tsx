"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Instagram,
  FileText,
  Palette,
  Layers,
  ShoppingCart,
  Server,
  Wrench,
  MessageSquare,
  Mail,
  Target,
  Code,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description: "Custom websites built with modern technologies like Next.js, React, and more",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast loading times",
      "Modern frameworks",
      "E-commerce integration",
      "CMS integration",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "iOS development",
      "Android development",
      "React Native",
      "App store optimization",
      "Push notifications",
      "In-app purchases",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    description: "Improve your search engine rankings and drive organic traffic",
    features: [
      "Keyword research",
      "On-page optimization",
      "Link building",
      "Technical SEO",
      "Content optimization",
      "Local SEO",
    ],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business",
    features: [
      "Social media marketing",
      "Content marketing",
      "Email campaigns",
      "PPC advertising",
      "Analytics & reporting",
      "Marketing automation",
    ],
  },
  {
    id: "social",
    icon: Instagram,
    title: "Social Media Management",
    description: "Engage your audience and build brand presence on social platforms",
    features: [
      "Content creation",
      "Post scheduling",
      "Community management",
      "Analytics tracking",
      "Influencer partnerships",
      "Crisis management",
    ],
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Creation",
    description: "Quality content that converts visitors into customers",
    features: [
      "Blog writing",
      "Video production",
      "Graphics design",
      "Copywriting",
      "Infographics",
      "Case studies",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    description: "Build a strong brand identity that resonates with your audience",
    features: [
      "Logo design",
      "Brand guidelines",
      "Visual identity",
      "Brand strategy",
      "Brand voice",
      "Marketing materials",
    ],
  },
  {
    id: "ui-ux",
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "User testing",
      "Design systems",
      "Accessibility",
    ],
  },
  {
    id: "ads",
    icon: Target,
    title: "Ads Management",
    description: "Maximize ROI with strategic advertising campaigns",
    features: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "Ad optimization",
      "A/B testing",
    ],
  },
  {
    id: "copywriting",
    icon: Code,
    title: "Copywriting",
    description: "Compelling copy that drives action and conversions",
    features: [
      "Website copy",
      "Sales pages",
      "Email sequences",
      "Ad copy",
      "Product descriptions",
      "Brand messaging",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Setup",
    description: "Complete e-commerce solutions to sell online",
    features: [
      "Store setup",
      "Payment integration",
      "Product management",
      "Order processing",
      "Inventory management",
      "Shipping integration",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Hosting Plans",
    description: "Reliable hosting solutions for your websites and applications",
    features: [
      "Cloud hosting",
      "VPS hosting",
      "Dedicated servers",
      "SSL certificates",
      "Backup solutions",
      "24/7 support",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance Plans",
    description: "Keep your digital assets updated and secure",
    features: [
      "Regular updates",
      "Security patches",
      "Performance monitoring",
      "Bug fixes",
      "Content updates",
      "Technical support",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automate customer communication with WhatsApp Business",
    features: [
      "Chatbot setup",
      "Auto-responses",
      "Order notifications",
      "Customer support",
      "Broadcast messaging",
      "Integration",
    ],
  },
  {
    id: "crm",
    icon: Zap,
    title: "CRM Setup",
    description: "Streamline customer relationships with CRM systems",
    features: [
      "CRM selection",
      "Data migration",
      "Custom workflows",
      "Integration setup",
      "Team training",
      "Ongoing support",
    ],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Campaigns",
    description: "Effective email marketing campaigns that convert",
    features: [
      "Campaign design",
      "List management",
      "Automation",
      "A/B testing",
      "Analytics",
      "Deliverability",
    ],
  },
  {
    id: "ai",
    icon: Zap,
    title: "AI Tools Development",
    description: "Custom AI solutions to automate and optimize your business",
    features: [
      "Chatbots",
      "AI assistants",
      "Data analysis",
      "Process automation",
      "Machine learning",
      "Integration",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation Services",
    description: "Automate repetitive tasks and streamline workflows",
    features: [
      "Workflow automation",
      "API integration",
      "Data synchronization",
      "Task scheduling",
      "Custom scripts",
      "Monitoring",
    ],
  },
];

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("servicesPageTitle")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("servicesPageSubtitle")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

