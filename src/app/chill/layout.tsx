import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Lofi Music BGM - Perfect for Focus & Relaxation | MK Chill",
  description: "Enjoy free Lofi Music ideal for studying, working, or simply chilling out. Let our calming lo-fi hip hop enrich your daily life. Experience unique music beyond YouTube today.",
  keywords: [ 'Lofi music', 'BGM', 'チル', '音楽' ],
  openGraph:{
    images: '/hoodCat.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
