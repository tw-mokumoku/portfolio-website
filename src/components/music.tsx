'use client'
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setNextMusicCategoryIndex, setNextMusicIndex, setPreviousMusicCategoryIndex, shuffleMusicBg, shuffleMusics } from "@/services/musicSlice";
import { toggleShowPanel } from "@/services/musicCategorySlice";
import VolumeSlider from '@/components/VolumeSlider';
import {useKey} from 'react-use';
import _ from 'lodash';

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
        load(musicSrc, {
            initialVolume: volume,
            autoplay: true,
            onend: onEndMusic
        });
    }
    useKey('ArrowUp', () => setVolume(_.clamp(volume + 0.02, 0, 1)), undefined, [volume]);
    useKey('ArrowDown', () => setVolume(_.clamp(volume - 0.02, 0, 1)), undefined, [volume]);
    useKey('ArrowLeft', () => dispatch(setPreviousMusicCategoryIndex()));
    useKey('ArrowRight', () => dispatch(setNextMusicCategoryIndex()));
    useKey(' ', togglePlayPause);
    useKey('m', () => setVolume(0));
    useKey('b', () => dispatch(shuffleMusicBg()));

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
        setVolume(0.75);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="z-0">
            <div className="flex">
                { isPlaying ?
                    <Image src='/music/ui/stop.svg' alt="stop" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={togglePlayPause} />
                    :
                    <Image src='/music/ui/play.svg' alt="play" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={togglePlayPause} />
                }
                <Image src='/music/ui/shuffle.svg' alt="shuffle" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={shuffleMusic} />
                <Image src='/music/ui/previous.svg' alt="previous" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={() => dispatch(setPreviousMusicCategoryIndex())} />
                <Image src='/music/ui/forward.svg' alt="forward" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-4" onClick={() => dispatch(setNextMusicCategoryIndex())} />
                <VolumeSlider volume={volume} setVolume={setVolume} />
            </div>
            <div className="flex">
                { isPlaying ?
                    <Image src="/music/ui/beats.gif" alt="beats" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                    :
                    <Image src="/music/ui/beatsMute.svg" alt="beatsMute" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                }
                <MusicName />
            </div>
        </div>
    );
}

function MusicName(){
    const {
        musicName,
    } = useSelector((state: {
        musicController: {
            musicName: string,
        }
    }) => state.musicController);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(toggleShowPanel())} className="cursor-pointer">
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
        </div>
    );
}