import { notFound } from "next/navigation";
import { SpaceShell } from "@/components/space/SpaceShell";
import { LangPromise } from "@/dictionaries/dictionaries";
import { getSpaceDict } from "@/dictionaries/space";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export default async function Page({ params }: { params: LangPromise }) {
  const lang = (await params).lang;
  if (lang !== "en" && lang !== "ja") notFound();
  const dict = getSpaceDict(lang);
  return <SpaceShell dict={dict} lang={lang} />;
}
