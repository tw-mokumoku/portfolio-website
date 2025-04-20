'use client'

import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

export function TechLogoMarquee(){
    const {width} = useWindowSize();
    const [gradientWidth, setGradientWidth] = useState<number>(200);

    useEffect(()=>{
      setGradientWidth( width >= 640 ? width >= 1024 ? 500 : 350 : 200 );
    }, []);

    return (
        <Marquee
        speed={20}
        autoFill={true}
        gradient={true}
        gradientWidth={gradientWidth}
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
    );
}