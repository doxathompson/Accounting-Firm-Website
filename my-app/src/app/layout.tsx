import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accounting-firm-website-one.vercel.app"),
  title: {
    default: "London Accounting Firm | Small Business Accountants in London",
    template: "%s | London Accounting Firm",
  },
  description:
    "Reliable accounting support for sole traders and small limited companies in London.",
  openGraph: {
    title: "London Accounting Firm | Small Business Accountants in London",
    description:
      "Reliable accounting support for sole traders and small limited companies in London.",
    url: "https://accounting-firm-website-one.vercel.app",
    siteName: "London Accounting Firm",
    images: [
      {
        url: "/hero-accounting-meeting.jpg",
        width: 1200,
        height: 900,
        alt: "Accountants reviewing paperwork with a small business client",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}