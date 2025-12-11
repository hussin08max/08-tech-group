import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place Your Order - Digital Agency UAE | Order Digital Services",
  description: "Order digital services from our UAE agency. Select your service and submit your project requirements. We'll get back to you within 24 hours.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

