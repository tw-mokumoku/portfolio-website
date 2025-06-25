'use client'
import "./chill.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LeftMusicUI } from "@/components/music";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '@/services/store';
import { shuffleMusicBg } from "@/services/musicSlice";
import FadeInDiv from "@/components/animation/FadeInDiv";
import Link from "next/link";
import {useKey} from 'react-use';

export default function Page() {
    const [startChill, setStartChill] = useState(true);

    return (
        <Provider store={store}>
        <div id="container" className="cursor-pointer">
            {startChill ?
                <div id="pressable-screen" className="pointer" onClick={() => setStartChill(false)} />
                :
                <></>
            }
            <ScreenEffects />
            {
                startChill
                ?
                <StartScreen />
                :
                <MainScreen />
            }
        </div>
        </Provider>
    )
}

function ScreenEffects(){
    const [isLowPower, setIsLowPower] = useState(true);
    const [crtLines, setCrtLines] = useState(<div id="crt-lines"/>);
    useKey('l', () => setIsLowPower(!isLowPower), undefined, [isLowPower]);
    useEffect(()=>{
        setCrtLines(isLowPower ? <div id="crt-lines"/> : <></>)
    }, [isLowPower]);

    return (
        <div className="relative box-sizing: content-box">
            <MusicBackground />
            {crtLines}
            <div id="darken" />
            <div id="vignette" />
        </div>
    );
}


function MusicBackground(){
    const dispatch = useDispatch();
    const {
        musicBgSrc
    } = useSelector((state: {
        musicController: {
            musicBgSrc: string
        }
    }) => state.musicController);

    useEffect(()=>{
        dispatch(shuffleMusicBg());
        // eslint-disable-next-line
    }, []);

    return (
        <div
            style={{ position: "absolute", width: "100vw", height: "100vh", top: "0px", left: "0px" }}
        >
            <Image
                key={musicBgSrc}
                src={musicBgSrc}
                alt=""
                fill
                style={{width: "100%", height: "100%", objectFit: "cover", zIndex: "0", overflow: "clip", overflowClipMargin: "content-box"}}
            />
        </div>
    );
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
    const [showAbout, setShowAbout] = useState(true);
    
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
                        <div className="flex flex-row-reverse">
                            <Image width={25} height={25} src="/crown.svg" alt="crown" id="shadow" className="pointer mb-3 me-3 -mt-1"
                                onClick={()=>setShowAbout(!showAbout)}
                            />
                            <Image width={25} height={25} src="/fullscreen.svg" alt="fullscreen" id="shadow" className="pointer mb-3 me-3"
                                onClick={() => {
                                    setIsFullScreen(!isFullScreen);
                                    if(isFullScreen) document.exitFullscreen();
                                    else document.body.requestFullscreen(); 
                                }}
                            />
                        </div>
                        <FadeInDiv show={showAbout} className="mt-2">
                            <div className="flex flex-col items-end text-xl">
                                <Link href="/">
                                    <div className="w-25 h-25 p-2" style={{ backgroundColor: "transparent", borderWidth: "1px", borderColor:"gray" }} id="shadow">
                                        <Image fill alt="hoodCat" src="/hoodCat.png" id="shadow"/>
                                    </div>
                                </Link>
                                <p id="shadow" className="text-xl text-center mt-1">mk-mokumoku</p>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">↑ / ↓</p><p id="shadow">change volume</p>
                                </div>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">← / →</p><p id="shadow">change category</p>
                                </div>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">spacebar</p><p id="shadow">play/pause</p>
                                </div>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">M</p><p id="shadow">mute music on/off</p>
                                </div>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">B</p><p id="shadow">change background image</p>
                                </div>
                                <div className="text-xl mt-1 flex">
                                     <p id="red-shadow" className="mr-3">L</p><p id="shadow">low-power mode on/off</p>
                                </div>
                                <Link href="/">
                                    <p id="shadow" className="text-xl mt-1 underline">click here to know about me</p>
                                </Link>
                            </div>
                        </FadeInDiv>
                    </div>
                </div>
                <div id="bottom-ui" className="w-full z-6 relative">
                    <LeftMusicUI />
                </div>
            </div>
        </>
    );
}