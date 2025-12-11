import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - Digital Agency UAE | Affordable Digital Services",
  description: "Transparent pricing for all our digital services. Choose the perfect package for web development, SEO, marketing, mobile apps, and more.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

