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
  title: "Mokumoku-WebPortfolio",
  description: "このサイトはtw-mokumokuのWebポートフォリオです",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
      </body>
    </html>
  );
}
