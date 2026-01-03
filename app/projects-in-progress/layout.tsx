import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المشاريع قيد التنفيذ - نبني السودان بالكود",
  description: "مشاريع المبادرة التي قيد التنفيذ حالياً. جميعها مشاريع تطوعية غير ربحية",
};

export default function ProjectsInProgressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
