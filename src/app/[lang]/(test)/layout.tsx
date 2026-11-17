import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "@/app/globals.css";
import "./space.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LangPromise, langFilter } from "@/dictionaries/dictionaries";

const spaceUi = Sora({
  variable: "--font-space-ui",
  subsets: ["latin"],
});

const spaceDisplay = Fraunces({
  variable: "--font-space-display",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: LangPromise;
}): Promise<Metadata> {
  const lang = langFilter((await params).lang);
  const isJa = lang === "ja";
  return {
    title: "mk-mokumoku",
    description: isJa
      ? "mk-mokumoku のポートフォリオ"
      : "Portfolio of mk-mokumoku",
    keywords: [
      "mk-mokumoku",
      "portfolio",
      "Next.js",
      "Web development",
      "ポートフォリオ",
    ],
    openGraph: {
      images: "/hoodCat.png",
      locale: isJa ? "ja_JP" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
  header,
  params,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  params: LangPromise;
}>) {
  const lang = langFilter((await params).lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${spaceUi.variable} ${spaceDisplay.variable} antialiased space-body`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* Legacy parallel header slot kept empty for the lounge. */}
          <div className="hidden" aria-hidden>
            {header}
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
