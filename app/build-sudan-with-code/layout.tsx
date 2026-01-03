import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نبني السودان بالكود - المبادرة",
  description: "مبادرة تقنية سودانية تطوعية غير ربحية هدفها استخدام البرمجة في خدمة المجتمع السوداني. قدم فكرتك أو انضم كمتطوع.",
};

export default function InitiativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
