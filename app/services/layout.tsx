import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Digital Agency UAE | Web Development, SEO, Marketing",
  description: "Comprehensive digital services in the UAE. Web development, mobile apps, SEO, digital marketing, social media, branding, UI/UX, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

