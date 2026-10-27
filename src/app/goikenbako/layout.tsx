import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "意見箱",
  description: "意見・要望の投稿フォーム",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GoikenbakoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
