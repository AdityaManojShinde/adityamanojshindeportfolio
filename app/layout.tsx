import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/sections/navbar";

import { getBaseUrl } from "@/lib/utils";
import WhatsAppButton from "@/components/whatsapp-button";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Aditya Shinde | Web Developer Portfolio",
    template: "%s | Aditya Shinde",
  },
  description:
    "Explore Aditya Shinde's web developer portfolio showcasing AI, frontend development, and innovative projects.",
  keywords: [
    "Aditya Shinde",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Software Engineer",
    "AI",
    "Frontend Development",
  ],
  authors: [{ name: "Aditya Shinde" }],
  creator: "Aditya Shinde",
  publisher: "Aditya Shinde",
  openGraph: {
    title: "Aditya Shinde | Web Developer Portfolio",
    description:
      "Explore Aditya Shinde's web developer portfolio showcasing AI, frontend development, and innovative projects.",
    url: getBaseUrl(),
    siteName: "Aditya Shinde Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure you have an og-image.png in your public folder
        width: 1200,
        height: 630,
        alt: "Aditya Shinde Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Shinde | Web Developer Portfolio",
    description:
      "Explore Aditya Shinde's web developer portfolio showcasing AI, frontend development, and innovative projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getBaseUrl(),
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
