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

export const metadata : Metadata = {
  title: "Pokédex",
  description: "Mon Pokédex Next.js",
};

import LocaleProviderWrapper from '@/components/LocaleProviderWrapper';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* provide locale context and render header across all pages */}
        <LocaleProviderWrapper>
          <Header />
          {children}
        </LocaleProviderWrapper>
      </body>
    </html>
  );
}
