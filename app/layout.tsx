import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BottomNav } from "@/components/bottom-nav";
import { PWAInstaller } from "@/components/pwa-installer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "نبني السودان بالكود - مبادرة تقنية سودانية تطوعية",
  description: "مبادرة تطوعية غير ربحية هدفها استخدام التقنية في خدمة المجتمع السوداني. حلول تقنية مجانية لأفراد ومؤسسات تحتاج دعم تقني.",
  keywords: "مبادرة سودانية, تقنية تطوعية, برمجة مجانية, بناء السودان, 08 Tech Group",
  authors: [{ name: "08 Tech Group" }],
  openGraph: {
    title: "نبني السودان بالكود - مبادرة تقنية سودانية",
    description: "مبادرة تطوعية غير ربحية هدفها استخدام التقنية في خدمة المجتمع السوداني",
    type: "website",
    locale: "ar_SD",
    siteName: "نبني السودان بالكود",
  },
  twitter: {
    card: "summary_large_image",
    title: "نبني السودان بالكود",
    description: "مبادرة تقنية سودانية تطوعية غير ربحية",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2d6a4f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="نبني السودان" />
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Hotjar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:0000000,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning dir="rtl">
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <PWAInstaller />
            <Navbar />
            <main className="min-h-screen pb-[70px] md:pb-0">{children}</main>
            <Footer />
            <BottomNav />
            <WhatsAppButton />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

