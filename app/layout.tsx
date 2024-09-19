import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./loading";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nebiyou's Portfolio Website",
  description: "Nebiyou's Personal and Professional Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest" scroll-behavior="smooth">
       {/* Google Analytics script */}
       <Script
        src={"https://www.googletagmanager.com/gtag/js?id=G-RKXHVZZ2RP"}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RKXHVZZ2RP', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={inter.className + 'flex flex-col min-h-screen'}>
        <Header />
        <main className="p-4 container max-w-[1280px] mx-auto">
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
