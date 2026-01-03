import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا - نبني السودان بالكود",
  description: "تواصل معنا من خلال البريد الإلكتروني أو الهاتف أو واتساب. نحن هنا لمساعدتك.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

