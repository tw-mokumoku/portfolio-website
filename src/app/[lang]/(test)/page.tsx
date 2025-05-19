import { JobContextMenu } from "@/components/context-menu";
import { TechIconButtons } from "@/components/icon-buttons";
import { IPageDict } from "@/interface/pageDict";
import { IIntroSection, IOpeningSection, ISkillSection, IWorkSection } from "@/interface/sectionDict";
import { TechLogoMarquee } from "@/components/marquee";
import { SkillCards } from "@/components/skill-cards";
import { dict, LangPromise } from "@/dictionaries/dictionaries";

export default async function Page({params}:{params:LangPromise}) {
  const page:IPageDict = await dict(params);
  return (
    <>
      <div className="flex items-center justify-center h-screen top-0">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] mt-16">
          <SentenceComponent1 openingSection={page.root.openingSection}/>
          <SentenceComponent2 />
          <SentenceComponent3 openingSection={page.root.openingSection}/>
          <TechLogoMarquee />
          <TechIconButtons />
        </div>
      </div>
      <div id="anchor_greet" className="h-screen flex items-center justify-center flex-col -mt-65 sm:mt-20">
        <SentenceComponent6 introSection={page.root.introSection} />
      </div>
      <div id="anchor_skill" className="flex items-center justify-center flex-col pt-35 -mt-15 sm:mt-80">
        <SentenceComponent4 skillSection={page.root.skillSection} />
        <SkillCards />
      </div>
      <div id="anchor_job" className="flex items-center justify-center flex-col pt-35 -mt-50 pb-60 sm:mt-0">
        <SentenceComponent5 workSection={page.root.workSection} />
        <JobContextMenu workSection={page.root.workSection}/>
      </div>
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

/*
async function SentenceComponent1({params}:{params:LangPromise}){
  return (
    <h2 className="text-white align-center text-xs sm:text-base mb-10 select-none ">
    {(await dict(params)).root.openingSection.greet}
    </h2>
  );  
}
*/

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

async function SentenceComponent3({openingSection}:{openingSection:IOpeningSection}){
  return (
    <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold mt-16">
      {openingSection.scrollCheck}
    </p>
  );
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
        <br />
        {introSection.userFRIENDLY}
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
        <br />
        {introSection.userFRIENDLY}
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