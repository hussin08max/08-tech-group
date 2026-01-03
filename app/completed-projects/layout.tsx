import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المشاريع المنفذة - نبني السودان بالكود",
  description: "المشاريع التي تم إنجازها وتسليمها من خلال المبادرة. جميعها مشاريع تطوعية غير ربحية",
};

export default function CompletedProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
