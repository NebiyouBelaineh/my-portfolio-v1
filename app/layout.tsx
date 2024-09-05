import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className={inter.className + 'flex flex-col min-h-screen'}>
        <Header/>
        <main className="p-4">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
