import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Services Agency - UAE | Web Development, SEO, Marketing",
  description: "Premium digital services in the UAE. Web development, mobile apps, SEO, digital marketing, social media, branding, and more. Trusted by businesses across the Emirates.",
  keywords: "UAE digital agency, web development UAE, SEO Dubai, digital marketing, mobile apps, social media management",
  authors: [{ name: "UAE Digital Services Agency" }],
  openGraph: {
    title: "Digital Services Agency - UAE",
    description: "Premium digital services in the UAE. Web development, SEO, digital marketing, and more.",
    type: "website",
    locale: "en_AE",
    siteName: "UAE Digital Services Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services Agency - UAE",
    description: "Premium digital services in the UAE",
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
    <html lang="en" suppressHydrationWarning dir="ltr">
      <head>
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
      <body className={inter.className} suppressHydrationWarning>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

