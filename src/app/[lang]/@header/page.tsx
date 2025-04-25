'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { TransparentContainer } from '@/components/animation/panel-container';
import './page.css';

export default function Page() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <header
        className="sticky top-0 flex flex-row items-center justify-center h-18 gap-4 z-999"
        style={{ WebkitBackdropFilter: "blur(2px)", backdropFilter: "blur(2px)" }}
        >
            {/* プロフィールダイアログ */}
            <Dialog
            open={open}
            onClose={handleClose}
            style={{ backgroundColor: "unset !important", margin: "unset !important", overflowY: "unset" }}
            >
                <TransparentContainer>
                <p className='text-left text-xs sm:text-lg'>
                    初めまして、私のポートフォリオサイトをご覧いただきありがとうございます。<br />
                    <br />
                    渡邊琢資と申します。<br />
                    <br />
                    Githubにてmk-mokumokuという名前で活動させていただいております。<br />
                    <br />
                    私がプログラミングに興味を持ちはじめ、ゲーム制作の専門学校に通いプログラミングの道を歩み始めてから、かれこれ4年の月日が流れました。最初はゲームを作ることに没頭し、その後はソフトウェア開発、そしてアプリ開発、最終的に落ち着いたのは表層の美しさとは裏腹に裏側の複雑さが共存するWeb開発という名の舞台でした。<br />
                    <br />
                    子供の頃から、何かを組み立てる強い衝動がありました。成長するにつれ、その衝動はコンピューターの世界へと向かいました。私はこの4年間、日常生活を時折フリーズさせ、目の前のディスプレイの光だけを動かすことに没頭してきました。その結果、私の生活記録は、長時間露光で撮影された夜景のように、移動する光の軌跡だけが記録されているかもしれません。指先から生まれる無限の可能性に心を奪われ、現実の時間の流れさえ忘れてしまうほど、コンピューターに情熱を注いてきました。<br />
                    <br />
                    中でも、約1年半の求職期間に、起業への思いから始めたWebサービスのホスティング経験は、自身の成長を大きく促すものでした。Webサイトの基本的な構築から、裏側のAPI開発、データの保管場所となるデータベースの設計、そして多くの人に見てもらうためのSEO対策、さらにサービスを維持するためのマネタイズの方法まで、一人でWebサービスを立ち上げるには、多岐にわたる知識と実践的なスキルが求められました。<br />
                    <br />
                    現在、私が大切にしているのは、見た目の美しさだけでなく、ストレスフリーで操作性の高い、クリーンで丁寧に作り込まれたインターフェースの創造です。使いやすいデザインであることは、Webサイトの根幹だと考えています。<br />
                </p>
                </TransparentContainer>
                {/*
                */}
            </Dialog>
            <Link href="/" className="absolute left-0 flex flex-row items-center h-4/9 lg:h-3/5 gap-3 lg:gap-5 ml-4 text-sm lg:text-base">
                <Image
                src="/hoodCat.png"
                alt="サイトのロゴ"
                fill
                style={{objectFit: 'contain'}}
                className="h-5/6 rounded-full"
                />
                <h1>mk-mokumoku</h1>
            </Link>
            <ul className="flex flex-row items-center gap-6 lg:gap-10 collapse md:visible text-sm lg:text-base">
                <li className='cursor-pointer' onClick={handleClickOpen}>プロフィール</li>
                <li><Link href="#anchor_greet">ご挨拶</Link></li>
                <li><Link href="#anchor_skill">スキル</Link></li>
                <li><Link href="#anchor_job">お仕事</Link></li>
                <li>プロジェクト</li>
            </ul>
            <Link
                href="/"
                className="absolute right-0 mr-8 text-sm lg:text-base"
                style={{ textShadow: "0 0 10px #fff" }}
            >
            お問い合わせ　&gt;
            </Link>
            
        </header>
    );
}