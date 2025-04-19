'use client'
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { useWindowSize } from "react-use";

export default function Home() {
  const {width} = useWindowSize();
  return (
    <div className="home top-0">
      <div className="flex h-screen flex items-center justify-center">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] sm:mt-16 mt-32">
          <h2 className="text-white align-center text-xs md:text-base mb-10 select-none ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
              ポートフォリオ
            </span>
            をご確認いただきありがとうございます 
          </h2>
          <h1 className="text-white text-4xl md:text-6xl xs:text-8xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight md:text-7xl lg:text-8xl select-none">
            mk
            <span className="text-gray-800">
              -
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
               mokumoku
            </span>
          </h1>
          <div>
            <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase mt-16">
              スクロールでスキル &amp; 経験を確認
            </p>
          </div>
          <Marquee
          speed={20}
          autoFill={true}
          gradient={true}
          gradientWidth={width>=640?width>=1024?500:350:200}
          gradientColor="#09090b"
          >
            <div className="h-15 mx-4">
              <Image
              src="/react_logo.svg"
              alt="React Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-22 mx-4">
              <Image
              src="/next_logo.svg"
              alt="Next Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-10 mx-4">
              <Image
              src="/git_logo.svg"
              alt="Git Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-23 mx-4">
              <Image
              src="/vercel_logo.svg"
              alt="Vercel Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-5 mx-4">
              <Image
              src="/tailwind_logo.svg"
              alt="Tailwindcss Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-13 mx-4">
             <Image
              src="/heroku_logo.svg"
              alt="Heroku Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
            <div className="h-12 mx-4">
             <Image
              src="/neon_logo.png"
              alt="Neon Logo"
              fill
              style={{objectFit: 'contain'}}
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}