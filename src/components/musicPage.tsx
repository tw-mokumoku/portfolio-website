'use client'
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { LeftMusicUI } from "@/components/music";
import { useSelector, useDispatch } from 'react-redux';
import { setNextMusicCategoryIndex, setPreviousMusicCategoryIndex, shuffleMusicBg, increaseVolume, decreaseVolume, toggleMusicIsMuted, toggleMusicIsPlaying } from "@/services/musicSlice";
import FadeInDiv from "@/components/animation/FadeInDiv";
import Link from "next/link";
import {useKey} from 'react-use';
import { toggleCrtLines } from "@/services/environmentSlice";
import { toggleShowPanel } from "@/services/musicCategorySlice";
import { switchCommonCSSToChill } from '@/services/commonCssSlice'

export function InitialProcesses(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(switchCommonCSSToChill());
        // eslint-disable-next-line
    }, []);

    return <></>;
}

export function ScreenEffects() {
    const dispatch = useDispatch();
    const [crtLines, setCrtLines] = useState(<div id="crt-lines" className="z-9999"/>);
    const {
        showCrtLines
    } = useSelector((state: {
        environmentController: {
            showCrtLines: boolean
        }
    }) => state.environmentController);
    const {
        musicIsMuted,
        mood
    } = useSelector((state: {
        musicController: {
            musicIsMuted: boolean,
            mood: string
        }
    }) => state.musicController);

    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    useKey('l', () => dispatch(toggleCrtLines()));
    useEffect(()=>{
        setCrtLines(showCrtLines ? <div id="crt-lines" className="z-9999"/> : <></>)
    }, [showCrtLines]);

    return (
        <>
            <div className="relative box-sizing: content-box">
                <MusicBackground />
                { mood === 'chill' ?
                    <>
                        {crtLines}
                        <div id="darken" className="z-1" />
                        <div id="vignette" />
                    </>
                    :
                    <>
                        <div id="darken" className="z-1" style={{ opacity: 0.3 }} />
                        <div id="bottom-fade"/>
                        <LightEffect />
                    </>
                }
            </div>
            { musicIsMuted ? 
                <p className={`absolute h-full w-full text-5xl pointer flex justify-center items-center ${defaultTextEffect}`}>SOUND MUTED...</p>
                :
                <></>
            }
        </>
    );
}

function LightEffect() {
    const lightParticles = Array.from({ length: 80 }, (_, i) => (
        <div
            key={i}
            className="light-particle z-1"
            style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${12 + Math.random() * 40}s`
            }}
        />
    ));

    return (
        <div className="absolute inset-0 pointer-events-none">
            {lightParticles}
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

export function StartScreen(){
    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    return (
        <div id="ui-container">
            <div id="top-ui" className="w-full z-6 relative">
            </div>
            <div id="bottom-ui" className="w-full z-6 relative">
                {defaultTextEffect ? 
                    <TypeAnimation
                    cursor={false}
                    sequence={[
                        2000,
                        "click the screen to start",
                    ]}
                    wrapper="span"
                    speed={50}
                    className={`${defaultTextEffect} type`}
                    />
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export function MainScreen(){
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

    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    return (
        <div>
            <div className="flex flex-row-reverse">
                <Image width={25} height={25} src="/music/ui/crown.svg" alt="crown" className={`${defaultTextEffect} pointer mb-3 me-3 -mt-1`}
                    onClick={()=>setShowAbout(!showAbout)}
                />
                <Link href='https://github.com/tw-mokumoku'><Image width={22} height={22} src="/music/ui/github_icon.svg" alt="crown" className={`${defaultTextEffect} pointer mb-3 me-3`} style={{ marginTop: 1 }}/></Link>
                <Link href='https://x.com/mk_mokumoku'><Image width={25} height={25} src="/music/ui/x.svg" alt="crown" className={`${defaultTextEffect} pointer mb-3 me-3`}/></Link>
                <Link href='https://discord.com/users/1305870412227547212'><Image width={25} height={25} src="/music/ui/discord_icon.svg" alt="crown" className={`${defaultTextEffect} pointer mb-3 me-3`}/></Link>
                <Image width={25} height={25} src="/music/background/fullscreen.svg" alt="fullscreen" className={`${defaultTextEffect} pointer mb-3 me-3`}
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
    const dispatch = useDispatch();
    const {
        showPanel
    } = useSelector((state: {
        musicCategoryController: {
            showPanel: boolean
        }
    }) => state.musicCategoryController);
    const {
        mood
    } = useSelector((state: {
        musicController: {
            mood: string
        }
    }) => state.musicController);

    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    const [upHovering, setUpHovering] = useState(false);
    const [downHovering, setDownHovering] = useState(false);
    const [nextHovering, setNextHovering] = useState(false);
    const [previousHovering, setPreviousHovering] = useState(false);
    const [openCategoryMenuHovering, setOpenCategoryMenuHovering] = useState(false);
    const [spacebarHovering, setSpacebarHovering] = useState(false);
    const [mHovering, setMHovering] = useState(false);
    const [bHovering, setBHovering] = useState(false);
    const [lHovering, setLHovering] = useState(false);
    const [volumeUp, setVolumeUp] = useState(false);
    const [volumeDown, setVolumeDown] = useState(false);

    useEffect(()=>{
        if(volumeUp){
            const interval = setInterval(() => {
                dispatch(increaseVolume());
            }, 100);
            return () => clearInterval(interval);
        }
    // eslint-disable-next-line
    }, [volumeUp]);

    useEffect(()=>{
        if(volumeDown){
            const interval = setInterval(() => {
                dispatch(decreaseVolume());
            }, 100);
            return () => clearInterval(interval);
        }
    // eslint-disable-next-line
    }, [volumeDown]);

    return (
        <FadeInDiv show={showAbout && !showPanel} className="mt-2 absolute right-0 overflow-scroll [&::-webkit-scrollbar]:hidden pe-3 max-h-[50vh] pb-5 px-5">
        <div className="flex flex-col items-end text-xl">
            <Link href="/">
                <div className={`w-25 h-25 p-2 ${defaultTextEffect}`} style={{ backgroundColor: "transparent", borderWidth: "1px", borderColor:`${mood === 'chill' ? "gray" : "white"}` }}>
                    <Image fill alt="hoodCat" src="/hoodCat.png" className={`${defaultTextEffect}`}/>
                </div>
                <p className={`text-xl text-center mt-1 ${defaultTextEffect}`}>mk-mokumoku</p>
            </Link>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setOpenCategoryMenuHovering(true)} onMouseLeave={() => setOpenCategoryMenuHovering(false)} onClick={() => dispatch(toggleShowPanel())}>
                 <div className={`mr-3 ${openCategoryMenuHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>click here</div><p className={`${defaultTextEffect}`}>to open menu</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setUpHovering(true)} onMouseLeave={() => setUpHovering(false)} onClick={() => dispatch(increaseVolume())} onMouseDown={() => setVolumeUp(true)} onMouseUp={() => setVolumeUp(false)}>
                 <div className={`mr-3 ${upHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>↑</div><p className={`${defaultTextEffect}`}>volume up</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setDownHovering(true)} onMouseLeave={() => setDownHovering(false)} onClick={() => dispatch(decreaseVolume())} onMouseDown={() => setVolumeDown(true)} onMouseUp={() => setVolumeDown(false)}>
                 <div className={`mr-3 ${downHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>↓</div><p className={`${defaultTextEffect}`}>volume down</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setNextHovering(true)} onMouseLeave={() => setNextHovering(false)} onClick={() => dispatch(setNextMusicCategoryIndex())}>
                 <div className={`mr-3 ${nextHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>→</div><p className={`${defaultTextEffect}`}>next category</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setPreviousHovering(true)} onMouseLeave={() => setPreviousHovering(false)} onClick={() => dispatch(setPreviousMusicCategoryIndex())}>
                 <div className={`mr-3 ${previousHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>←</div><p className={`${defaultTextEffect}`}>previous category</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setSpacebarHovering(true)} onMouseLeave={() => setSpacebarHovering(false)} onClick={() => dispatch(toggleMusicIsPlaying())}>
                 <p className={`mr-3 ${spacebarHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>spacebar</p><p className={`${defaultTextEffect}`}>play/pause</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setMHovering(true)} onMouseLeave={() => setMHovering(false)} onClick={() => dispatch(toggleMusicIsMuted())}>
                 <p className={`mr-3 ${mHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>M</p><p className={`${defaultTextEffect}`}>mute sound on/off</p>
            </div>
            <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setBHovering(true)} onMouseLeave={() => setBHovering(false)} onClick={() => dispatch(shuffleMusicBg())}>
                 <p className={`mr-3 ${bHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>B</p><p className={`${defaultTextEffect}`}>change background image</p>
            </div>
            { mood === 'chill' ?
                <div className="text-xl mt-1 flex pointer" onMouseEnter={() => setLHovering(true)} onMouseLeave={() => setLHovering(false)} onClick={() => dispatch(toggleCrtLines())}>
                    <p className={`mr-3 ${lHovering ? defaultTextEffect : mood !== "chill" ? "" : "red-shadow"}`}>L</p><p className={`${defaultTextEffect}`}>low-power mode on/off</p>
                </div>
                :
                <></>
            }
            <Link href="/">
                <p className={`text-xl mt-1 underline ${defaultTextEffect}`}>click here to know about me</p>
            </Link>
        </div>
    </FadeInDiv>
    );
}