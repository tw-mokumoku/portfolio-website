import { TechIconButtons } from "@/components/icon-buttons";
import { TechLogoMarquee } from "@/components/marquee";
import { Button } from "@/components/ui/button";
import { SkillIcon } from "@/components/animation/skill-icon";
import { SkillCards } from "@/components/skill-cards";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen top-0">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] sm:mt-16 mt-32">
          <SentenceComponent1 />
          <SentenceComponent2 />
          <SentenceComponent3 />
          <TechLogoMarquee />
          <TechIconButtons />
        </div>
      </div>
      <div id="anchor_one" className="flex items-center justify-center flex-col pt-35 -mt-50">
        <SentenceComponent4 />
        <SkillCards />
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
    <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase mt-16">
    スクロールでスキル &amp; 経験を確認
    </p>
  );
}

function SentenceComponent4(){
  return (
    <h2 className="mb-30 text-gray-100 text-2xl md:text-4xl xs:text-6xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight select-none">
      スキル &amp; 経験
    </h2>
  );
}