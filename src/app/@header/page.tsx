import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
    return (
        <header
        className="sticky top-0 flex flex-row items-center justify-center h-18 gap-4 z-999"
        style={{ WebkitBackdropFilter: "blur(2px)", backdropFilter: "blur(2px)" }}
        >
            <Link href="/" className="absolute left-0 flex flex-row items-center h-3/5 gap-5 ml-4">
                <Image
                src="/hoodCat.png"
                alt="サイトのロゴ"
                fill
                style={{objectFit: 'contain'}}
                className="h-5/6 rounded-full"
                />
                <h1>mk-mokumoku</h1>
            </Link>
            <ul className="flex flex-row items-center gap-10 collapse md:visible">
                <li>プロフィール</li>
                <li><Link href="#anchor_greet">ご挨拶</Link></li>
                <li><Link href="#anchor_skill">スキル</Link></li>
                <li><Link href="#anchor_job">お仕事</Link></li>
                <li>プロジェクト</li>
            </ul>
            <Link
                href="/"
                className="absolute right-0 mr-8"
                style={{ textShadow: "0 0 10px #fff" }}
            >
            お問い合わせ　&gt;
            </Link>
            
        </header>
    );
}