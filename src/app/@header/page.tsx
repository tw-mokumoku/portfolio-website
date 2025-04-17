import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
    return (
        <header className="sticky top-0 relative flex flex-row items-center justify-center h-18 gap-4">
            <Link href="/" className="absolute left-0 flex flex-row items-center h-3/5 gap-5 ml-4">
                <Image
                src="/hoodCat.png"
                alt="サイトのロゴ"
                className="h-5/6 rounded-full"
                />
                <h1>mk-mokumoku</h1>
            </Link>
            <ul className="flex flex-row items-center gap-10">
                <li>Work</li>
                <li>Benefits</li>
                <li>Process</li>
                <li>About</li>
            </ul>
            <Link
                href="/"
                className="absolute right-0 mr-8"
                style={{ textShadow: "0 0 10px #fff" }}
            >
            Project request　&gt;
            </Link>
        </header>
    );
}