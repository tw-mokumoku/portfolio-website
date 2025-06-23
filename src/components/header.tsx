'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { TransparentContainer } from '@/components/animation/panel-container';
import { ICenter, IHeader, ILeft, IProDig, IRight } from '@/interface/header';

export default function Header({header}:{header:IHeader}) {
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
            <LeftHeader left={header.left}/>
            <CenterHeader handleClickOpen={handleClickOpen} center={header.center}/>
            <RightHeader right={header.right}/>
            <ProfileDialog open={open} handleClose={handleClose} pd={header.profileDialog}/>
        </header>
    );
}
function ProfileDialog({open, handleClose, pd}:{open:boolean, handleClose:()=>void, pd:IProDig}){
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        style={{ backgroundColor: "unset !important", margin: "unset !important", overflowY: "unset" }}
        >
            <TransparentContainer>
            <p className='text-left text-xs sm:text-lg'>
                {pd.welcomePAGE}<br />
                <br />
                {pd.name}<br />
                <br />
                {pd.githubMOKUMOKU}<br />
                <br />
                {pd.webdev4yrs}<br />
                <br />
                {pd.compulsion2BUILD}<br />
                <br />
                {pd.yearsHOST1half}<br />
                <br />
                {pd.cleanINTERFACE}<br />
            </p>
            </TransparentContainer>
        </Dialog>
    );
}

function LeftHeader({left}:{left:ILeft}){
    return (
        <Link href="/" className="absolute left-0 flex flex-row items-center h-4/9 lg:h-3/5 gap-3 lg:gap-5 ml-4 text-sm lg:text-base">
            <Image
            src="/hoodCat.png"
            alt="サイトのロゴ"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            className="h-5/6 rounded-full"
            />
            <h1>{left.name}</h1>
        </Link>
    );
}
function CenterHeader({handleClickOpen, center}:{handleClickOpen:()=>void, center:ICenter}){
    return (
        <ul className="flex flex-row items-center gap-6 lg:gap-10 collapse md:visible text-sm lg:text-base">
            <li className='cursor-pointer' onClick={handleClickOpen}>{center.profile}</li>
            <li><Link href="#anchor_greet">{center.greet}</Link></li>
            <li><Link href="#anchor_skill">{center.skill}</Link></li>
            <li><Link href="#anchor_job">{center.job}</Link></li>
        </ul>
    );
}
function RightHeader({right}:{right:IRight}){
    return (
        <Link
            href="/"
            className="absolute right-0 mr-8 text-sm lg:text-base"
            style={{ textShadow: "0 0 10px #fff", visibility: 'hidden' }}// コンタクトリンクは一時的に非表示にしている。
        >
            {right.contact}　&gt;
        </Link>
    );
}