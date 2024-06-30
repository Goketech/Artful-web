import type { Metadata } from "next";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const snell = localfont({
  src: [{
    path: "../public/font/SnellBT-Bold.otf",
    weight: "800",
  }],
  variable: "--font-snell",
})

const patrick = localfont({
  src: [{
    path: "../public/font/PatrickHand-Regular.ttf",
    weight: "400",
  }],
  variable: "--font-patrick",
})

export const metadata: Metadata = {
  title: "Artful",
  description: "Artful is a web marketplace for art lovers to discover and buy custom artwork from emerging artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${snell.variable} ${patrick.variable} ${inter.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-1FYLYB16VW" />
    </html>
  );
}
