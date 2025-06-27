import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mk-mokumokuのポートフォリオ - Web開発とクリエイティブプロジェクト",
  description: "Web開発、インタラクティブデザイン、そして生産性向上ツールなどのユニークなプロジェクトを含む、mk-mokumokuの多様なポートフォリオをご覧ください。私のスキルがどのようにアイデアを形にするかをご覧ください。",
  keywords: [
    'mk-mokumoku',
    'ポートフォリオ',
    'Web開発',
    'Next.js',
    'React',
    'インタラクティブデザイン',
    'クリエイティブプロジェクト',
    'プログラミング',
    'ソフトウェア開発'
  ],
  openGraph:{
    images: '/hoodCat.png'
  }
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {header}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
