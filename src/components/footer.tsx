import { IFooter } from "@/interface/footer";
import Link from "next/link";

export function Footer({footer}:{footer:IFooter}) {
    return (
      <div 
          className='relative h-[250px]'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
          <div className='relative h-[calc(100vh+250px)] -top-[100vh]'>
              <div className='h-[250px] sticky top-[calc(100vh-250px)]' style={{ backgroundColor: "#45444f" }}>
                <Content footer={footer} />
              </div>
          </div>
      </div>
    );
}
export default function Content({footer}:{footer:IFooter}) {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Nav footer={footer} />
        <div className='flex flex-row-reverse'>
            <p>© 2025 Takushi Watanabe</p>
        </div>
    </div>
  )
}
const Nav = ({footer}:{footer:IFooter}) => {
    return (
      <div className='flex shrink-0 gap-20'>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>{footer.nav.overviewSection.title}</h3>
          <Link href="/">{footer.nav.overviewSection.home}</Link>
          <Link href="/#anchor_greet">{footer.nav.overviewSection.greeting}</Link>
          <Link href="/#anchor_skill">{footer.nav.overviewSection.skills}</Link>
          <Link href="/#anchor_job">{footer.nav.overviewSection.experience}</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>{footer.nav.worksSection.title}</h3>
          <Link href="/chill">{footer.nav.worksSection.chillMusic}</Link>
          <Link href="https://qiita.com/mk-mokumoku/items/0695081d892a8e175995">{footer.nav.worksSection.lifelineApp}</Link>
          <Link href="https://github.com/tw-mokumoku/portfolio1">{footer.nav.worksSection.discordBulletinBoard}</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>SNS</h3>
          <Link href="https://github.com/tw-mokumoku">GitHub</Link>
          <Link href="https://qiita.com/mk-mokumoku">Qiita</Link>
          <Link href="https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/">LinkdIn</Link>
          <Link href="https://discord.gg/BF6z7Dw9">Discord</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>　</h3>
          <Link href="https://x.com/mk_mokumoku">X（Twitter）</Link>
          <Link href="mailto:takushi.watanabe.work@gmail.com">G-Mail</Link>
        </div>
      </div>
    )
}