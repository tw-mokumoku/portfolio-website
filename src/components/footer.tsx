import Link from "next/link";

export function Footer() {
    return (
      <div 
          className='relative h-[250px]'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
          <div className='relative h-[calc(100vh+250px)] -top-[100vh]'>
              <div className='h-[250px] sticky top-[calc(100vh-250px)]' style={{ backgroundColor: "#45444f" }}>
                <Content />
              </div>
          </div>
      </div>
    );
}
export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Nav />
        <div className='flex flex-row-reverse'>
            <p>© 2025 Takushi Watanabe</p>
        </div>
    </div>
  )
}
const Nav = () => {
    return (
      <div className='flex shrink-0 gap-20'>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>概要</h3>
          <Link href="/">ホーム</Link>
          <Link href="/#anchor_greet">ご挨拶</Link>
          <Link href="/#anchor_skill">スキル</Link>
          <Link href="/#anchor_job">職歴</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='mb-2 uppercase text-[#ffffff80]'>制作物</h3>
          <Link href="/chill">チル - ミュージック</Link>
          <Link href="https://qiita.com/mk-mokumoku/items/0695081d892a8e175995">Lifeline - 集中習慣で「できる」を増やす</Link>
          <Link href="https://github.com/tw-mokumoku/portfolio1">Discordサーバー掲示板</Link>
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
const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}