'use client'
import "./chill.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { LeftMusicUI } from "@/components/music";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '@/services/store';
import { shuffleMusicBg } from "@/services/musicSlice";
import FadeInDiv from "@/components/animation/FadeInDiv";
import Link from "next/link";
import {useKey} from 'react-use';
import { MusicCategoryPanel } from "@/components/musicCategory";

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
            <MusicCategoryPanel />
        </div>
        </Provider>
    )
}

function ScreenEffects(){
    const [isLowPower, setIsLowPower] = useState(true);
    const [crtLines, setCrtLines] = useState(<div id="crt-lines" className="z-9999"/>);
    useKey('l', () => setIsLowPower(!isLowPower), undefined, [isLowPower]);
    useEffect(()=>{
        setCrtLines(isLowPower ? <div id="crt-lines" className="z-9999"/> : <></>)
    }, [isLowPower]);

    return (
        <div className="relative box-sizing: content-box">
            <MusicBackground />
            {crtLines}
            <div id="darken" className="z-1" />
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
                    <RightTopMenu setShowAbout={setShowAbout} showAbout={showAbout} setIsFullScreen={setIsFullScreen} isFullScreen={isFullScreen} />
                </div>
                <div id="bottom-ui" className="w-full z-6 relative">
                    <LeftMusicUI />
                </div>
            </div>
        </>
    );
}

function RightTopMenu({
    setShowAbout, showAbout, setIsFullScreen, isFullScreen
}:{
    setShowAbout: Dispatch<SetStateAction<boolean>>, 
    showAbout: boolean, 
    setIsFullScreen: Dispatch<SetStateAction<boolean>>, 
    isFullScreen: boolean
}){
    return (
        <div>
            <div className="flex flex-row-reverse">
                <Image width={25} height={25} src="/crown.svg" alt="crown" id="shadow" className="pointer mb-3 me-3 -mt-1"
                    onClick={()=>setShowAbout(!showAbout)}
                />
                <Link href='https://github.com/tw-mokumoku'><Image width={22} height={22} src="/github_icon.svg" alt="crown" id="shadow" className="pointer mb-3 me-3" style={{ marginTop: 1 }}/></Link>
                <Link href='https://x.com/mk_mokumoku'><Image width={25} height={25} src="/x.svg" alt="crown" id="shadow" className="pointer mb-3 me-3"/></Link>
                <Link href='https://discord.com/users/1305870412227547212'><Image width={25} height={25} src="/discord_icon.svg" alt="crown" id="shadow" className="pointer mb-3 me-3"/></Link>
                <Image width={25} height={25} src="/fullscreen.svg" alt="fullscreen" id="shadow" className="pointer mb-3 me-3"
                    onClick={() => {
                        setIsFullScreen(!isFullScreen);
                        if(isFullScreen) document.exitFullscreen();
                        else document.body.requestFullscreen(); 
                    }}
                />
            </div>
            <Profile showAbout={showAbout} />
        </div>
    );
}

function Profile({showAbout}:{showAbout:boolean}){
    const {
        showPanel
    } = useSelector((state: {
        musicCategoryController: {
            showPanel: boolean
        }
    }) => state.musicCategoryController);

    return (
        <FadeInDiv show={showAbout && !showPanel} className="mt-2 absolute right-0 overflow-scroll [&::-webkit-scrollbar]:hidden pe-3 max-h-[50vh]">
        <div className="flex flex-col items-end text-xl">
            <Link href="/">
                <div className="w-25 h-25 p-2" style={{ backgroundColor: "transparent", borderWidth: "1px", borderColor:"gray" }} id="shadow">
                    <Image fill alt="hoodCat" src="/hoodCat.png" id="shadow"/>
                </div>
                <p id="shadow" className="text-xl text-center mt-1">mk-mokumoku</p>
            </Link>
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
    );
}