import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Digital Agency UAE | Our Story, Mission & Team",
  description: "Learn about our digital services agency in the UAE. Our mission, values, and team dedicated to helping businesses succeed online.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

