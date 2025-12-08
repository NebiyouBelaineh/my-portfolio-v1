import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./loading";
// import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  const gTag = process.env.G_TAG!;
  return (
    <html lang="en" data-theme="forest" scroll-behavior="smooth">
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
      <GoogleAnalytics gaId={gTag}/>
    </html>
  );
}
