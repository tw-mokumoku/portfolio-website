'use client'
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setNextMusicCategoryIndex, setNextMusicIndex, setPreviousMusicCategoryIndex, shuffleMusics } from "@/services/musicSlice";
import VolumeSlider from '@/components/VolumeSlider';

export function LeftMusicUI(){
    const { load, togglePlayPause, isPlaying, volume, setVolume } = useAudioPlayer();
    const dispatch = useDispatch();
    const {
        musicCategoryIndex,
        musicName,
        musicSrc,
    } = useSelector((state: {
        musicController: {
            musicCategoryIndex: number,
            musicName: string,
            musicSrc: string,
        }
    }) => state.musicController);

    const startMusic = () =>{
        console.log("【Music Base】musicName: ", musicName);
        console.log("【Music Base】musicSrc: ", musicSrc);
        load(musicSrc, {
            initialVolume: 0.75,
            autoplay: true,
            onend: onEndMusic
        });
    }

    useEffect(()=>{
        startMusic();
        // eslint-disable-next-line
    }, [musicName]);

    const onEndMusic = () => {
        dispatch(setNextMusicIndex());
    }

    const shuffleMusic = () => {
        dispatch(shuffleMusics());
    }

    useEffect(()=>{
        shuffleMusic();
        // eslint-disable-next-line
    }, [musicCategoryIndex]);

    useEffect(() => {
        shuffleMusic();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="flex">
                { isPlaying ?
                    <Image src='/stop.svg' alt="stop" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={togglePlayPause} />
                    :
                    <Image src='/play.svg' alt="play" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={togglePlayPause} />
                }
                <Image src='/shuffle.svg' alt="shuffle" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={shuffleMusic} />
                <Image src='/previous.svg' alt="previous" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={() => dispatch(setPreviousMusicCategoryIndex())} />
                <Image src='/forward.svg' alt="forward" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-4" onClick={() => dispatch(setNextMusicCategoryIndex())} />
                <VolumeSlider volume={volume} setVolume={setVolume} />
            </div>
            <div className="flex">
                { isPlaying ?
                    <Image src="/beats.gif" alt="beats" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                    :
                    <Image src="/beatsMute.svg" alt="beatsMute" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                }
                <MusicName />
            </div>
        </>
    );
}

function MusicName(){
    const {
        musicName,
        musicSrc,
    } = useSelector((state: {
        musicController: {
            musicName: string,
            musicSrc: string,
        }
    }) => state.musicController);
    useEffect(()=>{
        console.log("【TypingAnimation】musicName: ", musicName);
        console.log("【TypingAnimation】musicSrc: ", musicSrc);
        // eslint-disable-next-line
    }, [musicName]);
    return (
        <TypeAnimation
            key={musicName}
            cursor={false}
            sequence={[
                (el) => el?.classList.remove('type'),
                musicName
            ]}
            wrapper="span"
            speed={50}
            className='typee'
        />
    );
}