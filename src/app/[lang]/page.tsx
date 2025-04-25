import { JobContextMenu } from "@/components/context-menu";
import { TechIconButtons } from "@/components/icon-buttons";
import { TechLogoMarquee } from "@/components/marquee";
import { SkillCards } from "@/components/skill-cards";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center h-screen top-0">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] mt-16">
          <SentenceComponent1 />
          <SentenceComponent2 />
          <SentenceComponent3 />
          <TechLogoMarquee />
          <TechIconButtons />
        </div>
      </div>
      <div id="anchor_greet" className="h-screen flex items-center justify-center flex-col -mt-65 sm:mt-20">
        <SentenceComponent6 />
      </div>
      <div id="anchor_skill" className="flex items-center justify-center flex-col pt-35 -mt-15 sm:mt-80">
        <SentenceComponent4 />
        <SkillCards />
      </div>
      <div id="anchor_job" className="flex items-center justify-center flex-col pt-35 -mt-50 pb-60 sm:mt-0">
        <SentenceComponent5 />
        <JobContextMenu />
      </div>
    </>
  );
}
function SentenceComponent1(){
  return (
    <h2 className="text-white align-center text-xs sm:text-base mb-10 select-none ">
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
      ポートフォリオ
    </span>
    をご確認いただきありがとうございます 
  </h2>
  );  
}

function SentenceComponent2(){
  return (
    <h1 className="text-white text-5xl sm:text-6xl xs:text-8xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight md:text-7xl lg:text-8xl select-none">
      mk
      <span className="text-gray-800">
        -
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
        mokumoku
      </span>
    </h1>
  );
}

function SentenceComponent3(){
  return (
    <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold mt-16">
    スクロールでスキル &amp; 経験を確認
    </p>
  );
}

function SentenceComponent6(){
  return (
    <>
    <div className="hidden md:block text-xs lg:text-sm text-center text-white tracking-widest">
      <p>
        渡邊琢資（mk-mokumoku）と申します。
      </p><br />
      <p>
        プログラミングに興味を持ち4年、ゲーム制作からWeb開発へ。<br/>
        子供の頃からの組み立て好きが高じ、PCの世界へ情熱を注いできました。
      </p>
      <p>
        独力でのWebサービス立ち上げ経験も活かし、見た目だけでなく使いやすいUIの創造を大切にしています。
      </p>
    </div>
    
    <div className="block md:hidden text-xs text-center text-white tracking-widest">
      <p>
        渡邊琢資（mk-mokumoku）と申します。
      </p>
      <br />
      <p>
        プログラミングに興味を持ち4年、ゲーム制作からWeb開発へ。
      </p>
      <p>
        子供の頃からの組み立て好きが高じ、PCの世界へ情熱を注いできました。
      </p>
      <p>
        独力でのWebサービス立ち上げ経験も活かし、<br />
        見た目だけでなく使いやすいUIの創造を大切にしています。
      </p>
    </div>
    </>
  );
}

function SentenceComponent4(){
  return (
    <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
      スキル &amp; 経験
    </h2>
  );
}

function SentenceComponent5(){
  return (
    <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
      お仕事
    </h2>
  );
}