import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
});
export const metadata: Metadata = {
  title: "Mokumoku-WebPortfolio",
  description: "このサイトはtw-mokumokuのWebポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${vt323.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
