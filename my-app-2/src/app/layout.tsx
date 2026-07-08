import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "London Accounting Firm | Accountants Who Pick Up The Phone",
    template: "%s | London Accounting Firm",
  },
  description:
    "Personal, responsive accounting support for sole traders and limited companies under £500k turnover.",
  openGraph: {
    title: "London Accounting Firm | Accountants Who Pick Up The Phone",
    description:
      "Personal, responsive accounting support for sole traders and limited companies under £500k turnover.",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
