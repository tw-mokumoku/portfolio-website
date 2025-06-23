'use client'
import "./chill.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LeftMusicUI } from "@/components/music";

export default function Page() {
    const [startChill, setStartChill] = useState(true);

    useEffect(()=>{

    }, [startChill]);

    return (
        <div id="container" className="cursor-pointer">
            {startChill ?
                <div id="pressable-screen" className="pointer" onClick={() => setStartChill(false)} />
                :
                <></>
            }
            <div className="relative box-sizing: content-box">
                <div
                    style={{ position: "absolute", width: "100vw", height: "100vh", top: "0px", left: "0px" }}
                >
                    <Image
                        src="/cyber_city.gif"
                        alt=""
                        fill
                        style={{width: "100%", height: "100%", objectFit: "cover", zIndex: "0", overflow: "clip", overflowClipMargin: "content-box"}}
                    />
                </div>
                <div id="crt-lines"/>
                <div id="darken" />
                <div id="vignette" />
            </div>
            {
                startChill
                ?
                <StartScreen />
                :
                <MainScreen />
            }
        </div>
    )
}

function StartScreen(){
    return (
        <div id="ui-container">
            <div id="top-ui" className="w-full z-6 relative">
            </div>
            <div id="bottom-ui" className="w-full z-6 relative">
                <TypeAnimation
                cursor={false}
                sequence={[
                    2000,
                    "click the screen to start",
                ]}
                wrapper="span"
                speed={50}
                className='type'
                />
            </div>
        </div>
    );
}

function MainScreen(){
    const [isFullScreen, setIsFullScreen] = useState(false);
    
    useEffect(()=>{
        function onFullscreenChange() {
            setIsFullScreen(Boolean(document.fullscreenElement));
        }
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    return (
        <>
            <div id="ui-container">
                <div id="top-ui" className="w-full z-6 relative">
                    <div></div>
                    <div>
                        <Image fill src="/fullscreen.svg" alt="fullscreen" id="shadow" className="pointer w-5 h-5 mb-3 me-3"
                            onClick={() => {
                                setIsFullScreen(!isFullScreen);
                                if(isFullScreen) document.exitFullscreen();
                                else document.body.requestFullscreen(); 
                            }}
                        />
                    </div>
                </div>
                <div id="bottom-ui" className="w-full z-6 relative">
                    <LeftMusicUI />
                </div>
            </div>
        </>
    );
}