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
  title: "Kawaii Music BGM - Heart-Fluttering Cute Sounds | MK Kawaii",
  description: "Welcome to the world of Kawaii Music, filled with charming and heartwarming melodies. Discover unique music perfect for study, work, or simply relaxing. Let our cute tunes brighten your everyday life!",
  keywords: [ 'Kawaii Music', 'Cute Music', 'BGM', 'Chill', 'Relaxation', 'Adorable', 'Pop', 'Sweet' ],
  openGraph:{
    images: '/music/kawaii_ogp_image.png'
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
