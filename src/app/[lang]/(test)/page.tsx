import { JobContextMenu } from "@/components/context-menu";
import { TechIconButtons } from "@/components/icon-buttons";
import { IPageDict } from "@/interface/pageDict";
import { IIntroSection, IOpeningSection, ISkillSection, IWorkSection } from "@/interface/sectionDict";
import { TechLogoMarquee } from "@/components/marquee";
import { SkillCards } from "@/components/skill-cards";
import { dict, LangPromise } from "@/dictionaries/dictionaries";
import Link from "next/link";
import { SecretConversion } from "@/components/secretConversion";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { VT323 } from "next/font/google";

// 静的エクスポート用のgenerateStaticParams関数
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ja' }
  ];
}

export default async function Page({params}:{params:LangPromise}) {
  const page:IPageDict = await dict(params);
  const lang:string = (await params).lang;
  return (
    <>
      {/* オープニングセクション - 画面中央に配置されたメインコンテンツ */}
      <div className="flex items-center justify-center h-screen top-0">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] mt-16">
          <SentenceComponent1 openingSection={page.root.openingSection}/>
          <SentenceComponent2 />
          <SentenceComponent3 openingSection={page.root.openingSection}/>
          <TechLogoMarquee />
          <TechIconButtons />
        </div>
      </div>

      {/* 挨拶セクション - 自己紹介文を表示 */}
      <div id="anchor_greet" className="h-screen flex items-center justify-center flex-col -mt-65 sm:mt-20 mx-12">
        <SentenceComponent6 introSection={page.root.introSection} />
      </div>

      <div className="h-screen flex items-center justify-center flex-col mt-15 sm:mt-20">
        <HighlightComponent lang={lang} />
      </div>

      {/* スキルセクション - スキルカードと説明を表示 */}
      <div id="anchor_skill" className="flex items-center justify-center flex-col pt-35 -mt-50 sm:mt-0">
        <SentenceComponent4 skillSection={page.root.skillSection} />
        <SkillCards />
      </div>

      {/* 職歴セクション - 職歴コンテキストメニューと説明を表示 */}
      <div id="anchor_job" className="flex items-center justify-center flex-col pt-35 -mt-50 pb-60 sm:mt-0">
        <SentenceComponent5 workSection={page.root.workSection} />
        <JobContextMenu workSection={page.root.workSection}/>
      </div>
      <Footer footer={page.footer} />
    </>
  );
}
const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});  

function HighlightComponent({lang}:{lang:string}){
  return (
    <>
      {/* ハイライトセクション - プロジェクトのハイライトを表示 */}
      { lang === 'ja' ?
        <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
          ハイライト
        </h2>
      :
        <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
          Highlight
        </h2>
      }
      <Link className="relative block w-9/12 max-w-full aspect-video lg:w-200 outline rounded-sm p-2" href="/chill">
        <Image src="/music/chill/gif/chillhop_radio/mario_room.gif" fill alt="Highlight" className="object-cover" sizes="(max-width: 1024px) 90vw, 50rem" />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 py-4 sm:gap-3 sm:px-5 md:gap-4 ${vt323.variable} antialiased rounded-sm`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <p
            className="max-w-[95%] text-center text-3xl leading-tight xs:text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-vt323)",
              filter: "drop-shadow(0px 0px 2px hsl(120, 100%, 80%)) drop-shadow(0px 0px 8px green)",
            }}
          >
            MK Chill
          </p>
          <p
            className="max-w-[min(95%,42rem)] px-1 text-center text-xs leading-snug sm:text-sm md:text-base lg:text-xl xl:text-2xl"
            style={{
              fontFamily: "var(--font-vt323)",
              filter: "drop-shadow(0px 0px 2px hsl(120, 100%, 80%)) drop-shadow(0px 0px 8px green)",
            }}
          >
            集中とリラックスに🎧 あなたの日常を彩るLo-fi Music
          </p>
        </div>
      </Link>
      <Link
        className="w-9/12 lg:w-200 justify-center items-center outline rounded-sm p-2 relative mt-10 min-h-[200px] block"
        href="https://wiki.mk-mokumoku.fyi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-sm ${vt323.variable} antialiased`}
          style={{
            background: "linear-gradient(135deg, hsl(260 35% 18%) 0%, hsl(220 40% 14%) 50%, hsl(280 30% 16%) 100%)",
          }}
        >
          <p
            className="text-4xl sm:text-5xl md:text-6xl text-center px-2"
            style={{
              fontFamily: "var(--font-vt323)",
              filter:
                "drop-shadow(0px 0px 2px hsl(260 100% 85%)) drop-shadow(0px 0px 8px hsl(270 70% 45%))",
            }}
          >
            wiki.mk-mokumoku.fyi
          </p>
          <p
            className="text-lg sm:text-xl md:text-2xl mt-4 px-4 text-center max-w-[95%]"
            style={{
              fontFamily: "var(--font-vt323)",
              filter:
                "drop-shadow(0px 0px 2px hsl(260 100% 85%)) drop-shadow(0px 0px 8px hsl(270 70% 45%))",
            }}
          >
            {lang === "ja"
              ? "AI ノート"
              : "AI notes"}
          </p>
        </div>
      </Link>
      { lang === 'ja' ?
      <Link className="w-9/12 lg:w-200 justify-center items-center outline rounded-sm p-2 mt-10" href="https://qiita.com/mk-mokumoku/items/0695081d892a8e175995">
        <Image src="/lifeline_featureGraphics.png" fill alt="Highlight" className="h-full object-cover" />
      </Link>
      :<></>
      }
    </>
  );
}

async function SentenceComponent1({openingSection}:{openingSection:IOpeningSection}){
  return (
    <h2 className="text-white align-center text-xs sm:text-base mb-10 select-none ">
      {openingSection.greet}
    </h2>
  );  
}

function SentenceComponent2(){
  return (
    <h1 className="text-white text-5xl sm:text-6xl xs:text-8xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight md:text-7xl lg:text-8xl select-none">
      mk
      <SecretConversion />
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
        mokumoku
      </span>
    </h1>
  );
}

async function SentenceComponent3({openingSection}:{openingSection:IOpeningSection}){
  return <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold mt-16">{openingSection.scrollCheck}</p>
}

async function SentenceComponent6({introSection}:{introSection:IIntroSection}){
  return (
    <>
    <div className="hidden md:block text-xs lg:text-sm text-center text-white tracking-widest">
      <p>
        {introSection.indroduce}
      </p><br />
      <p>
        {introSection.game2WebDev}<br/>
        {introSection.blocks2bytes}
      </p>
      <p>
        {introSection.selfLaunchExp}
      </p>
    </div>
    
    <div className="block md:hidden text-xs text-center text-white tracking-widest">
      <p>
        {introSection.indroduce}
      </p><br />
      <p>
        {introSection.game2WebDev}
      </p>
      <p>
        {introSection.blocks2bytes}
      </p>
      <p>
        {introSection.selfLaunchExp}
      </p>
    </div>
    </>
  );
}

async function SentenceComponent4({skillSection}:{skillSection:ISkillSection}){
  return (
    <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
      {skillSection.skillsEXPERIENCE}
    </h2>
  );
}

async function SentenceComponent5({workSection}:{workSection:IWorkSection}){
  return (
    <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
      {workSection.work}
    </h2>
  );
}