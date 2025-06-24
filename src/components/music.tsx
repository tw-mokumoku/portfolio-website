'use client'
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player"
import _ from 'lodash';
import Image from "next/image";
import { musicsObj, musicCategories, MusicCategory } from '@/dictionaries/musicsDict';
import { useDispatch, useSelector } from "react-redux";
import { setMusicIndex, setMusicCategoryIndex } from "@/services/musicSlice";


export function LeftMusicUI(){
    const { load, togglePlayPause, isPlaying } = useAudioPlayer();
//    const [musicIndex, setMusicIndex] = useState<number>(0);
//    const [musicCategoryIndex, setMusicCategoryIndex] = useState<number>(0);
    const [ musics, setMusics ] = useState(musicsObj);
    const [ musicName, setMusicName ] = useState('');
    const dispatch = useDispatch();
    const musicIndex = useSelector((state: { musicController: { musicIndex: number } }) => state.musicController.musicIndex);
    const musicCategoryIndex = useSelector((state: { musicController: { musicCategoryIndex: number } }) => state.musicController.musicCategoryIndex);


    const handleStart = (mCategoryIndex?:number, mIndex?: number) => {
        load(musics[(mCategoryIndex ? musicCategories[mCategoryIndex] : musicCategories[musicCategoryIndex]) as MusicCategory][mIndex ? mIndex : musicIndex].src, {
            initialVolume: 0.75,
            autoplay: true,
            onend: onEndMusic
        });
        setMusicName(musics[(mCategoryIndex ? musicCategories[mCategoryIndex] : musicCategories[musicCategoryIndex]) as MusicCategory][mIndex ? mIndex : musicIndex].name);
    }
    const onEndMusic = () => {
        let _mIndex = 0
        if (musicIndex < musics[musicCategories[musicCategoryIndex] as MusicCategory].length - 1) {
            _mIndex = musicIndex + 1
        } else {
            _mIndex = 0
            dispatch(setMusicIndex(0));
//            setMusicIndex(0);
        }
        setMusicIndex(_mIndex);
        handleStart(undefined, _mIndex);
    }

    const onShuffle = () => {
        musics[musicCategories[musicCategoryIndex] as MusicCategory] = _.shuffle(musics[musicCategories[musicCategoryIndex] as MusicCategory]);
        setMusics(musics);
        handleStart();
    }

    const onNextCategory = () =>{
        if (musicCategoryIndex === musicCategories.length - 1) {
            dispatch(setMusicCategoryIndex(0));
        } else {
            dispatch(setMusicCategoryIndex(musicCategoryIndex + 1));
        }
    }

    const onPreviousCategory = () =>{
        if (musicCategoryIndex === 0) {
            dispatch(setMusicCategoryIndex(musicCategories.length - 1));
        } else {
            dispatch(setMusicCategoryIndex(musicCategoryIndex - 1));
        }
    }

    const shuffleMusic = () => {
        musics[musicCategories[musicCategoryIndex] as MusicCategory] = _.shuffle(musics[musicCategories[musicCategoryIndex] as MusicCategory]);
        setMusics(musics);
        handleStart();
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
                <Image src='/shuffle.svg' alt="shuffle" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={onShuffle} />
                <Image src='/previous.svg' alt="previous" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={onPreviousCategory} />
                <Image src='/forward.svg' alt="forward" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" onClick={onNextCategory} />
            </div>
            <div className="flex">
                { isPlaying ?
                    <Image src="/beats.gif" alt="beats" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                    :
                    <Image src="/beatsMute.svg" alt="beatsMute" id="shadow" width={10} height={10} className="pointer w-5 h-5 mb-3 me-3" />
                }
                <MusicName sentence={musicName} />
            </div>
        </>
    );
}

function MusicName({sentence}:{sentence: string}){
    return (
        <TypeAnimation
            key={sentence}
            cursor={false}
            sequence={[
                (el) => el?.classList.remove('type'),
                sentence
            ]}
            wrapper="span"
            speed={50}
            className='typee'
        />
    );
}