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
    }, [width]);

    return (
        <Marquee
        speed={20}
        autoFill={true}
        gradient={true}
        gradientWidth={gradientWidth}
        gradientColor="#09090b"
        className="relative"
        >
          <div className="h-13 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/expo_logo.png"
            alt="Expo Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain', filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="h-13 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/react_native_logo.png"
            alt="React Native Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain', filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="h-15 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/react_logo.svg"
            alt="React Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-22 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/next_logo.svg"
            alt="Next Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-10 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/git_logo.svg"
            alt="Git Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-23 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/vercel_logo.svg"
            alt="Vercel Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-5 mx-4 relative">
            <Image
            src="/root/tech_logos/marquee/tailwind_logo.svg"
            alt="Tailwindcss Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-13 mx-4 relative">
           <Image
            src="/root/tech_logos/marquee/heroku_logo.svg"
            alt="Heroku Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
          <div className="h-12 mx-4 relative">
           <Image
            src="/root/tech_logos/marquee/neon_logo.png"
            alt="Neon Logo"
            fill
            sizes="10vw"
            style={{objectFit: 'contain'}}
            />
          </div>
        </Marquee>
    );
}