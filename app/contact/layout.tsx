import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Digital Agency UAE | Get In Touch",
  description: "Contact our digital services agency in the UAE. Email, phone, WhatsApp, or fill out our contact form. We're here to help with your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

