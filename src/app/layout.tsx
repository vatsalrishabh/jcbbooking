import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base site URL for metadata, sitemap, and robots (configure via NEXT_PUBLIC_SITE_URL)
const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrlString),
  title: {
    default: "JCB Booking Prayagraj | JCB Hire, Excavator & Earthmoving",
    template: "%s | JCB Booking Prayagraj",
  },
  description:
    "Fast and reliable JCB booking in Prayagraj (Allahabad). Excavator, Earthmoving, Demolition, Roadwork, and Land Levelling services. Call for immediate booking.",
  keywords: [
    "JCB Booking Prayagraj",
    "JCB Hire Allahabad",
    "Excavator rental Prayagraj",
    "Earthmoving services",
    "Poclain on rent",
    "Road construction",
    "Demolition services",
  ],
  authors: [{ name: "JCBBooking" }],
  creator: "JCBBooking",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "JCB Booking Prayagraj",
    siteName: "JCB Booking Prayagraj",
    description:
      "Book JCB and excavator services in Prayagraj for earthmoving, demolition, and roadwork.",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrlString}/next.svg`,
        width: 1200,
        height: 630,
        alt: "JCB Booking Prayagraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JCB Booking Prayagraj",
    description:
      "Book JCB and excavator services in Prayagraj for earthmoving, demolition, and roadwork.",
    creator: "@jcbbooking",
    images: [`${siteUrlString}/next.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
