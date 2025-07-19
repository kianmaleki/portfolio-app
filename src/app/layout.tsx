import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "My portfolio",
  description: "created by Kianmaleki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
