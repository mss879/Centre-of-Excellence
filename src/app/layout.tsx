import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PreloaderProvider from "@/components/anim/PreloaderProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Centre of Excellence at Ananda College | STEAM Sri Lanka",
    template: `%s | ${site.fullName}`,
  },
  description:
    "Discover hands-on STEAM education at Ananda College, where students learn across science, technology, engineering, arts and mathematics.",
  keywords: [
    "STEAM education Sri Lanka",
    "Ananda College Centre of Excellence",
    "STEM education Sri Lanka",
    "project-based learning Sri Lanka",
    "student innovation Sri Lanka",
  ],
  openGraph: {
    siteName: site.fullName,
    type: "website",
    locale: "en_LK",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 2400,
        height: 1339,
        alt: "The Ananda College main building with a Centre of Excellence banner",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#331119",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="coe-boot" strategy="beforeInteractive">
          {`(function(){var d=document.documentElement;d.classList.add('js');if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('coe-anim','coe-loading');}})();`}
        </Script>
        <a
          href="#main"
          className="sr-only z-[110] bg-maroon px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <PreloaderProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="grow outline-none">
            {children}
          </main>
          <SiteFooter />
        </PreloaderProvider>
      </body>
    </html>
  );
}
