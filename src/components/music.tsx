'use client'
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player"
import _ from 'lodash';
import Image from "next/image";


export function LeftMusicUI(){
    const { load, togglePlayPause, isPlaying } = useAudioPlayer();
    const [musicIndex, setMusicIndex] = useState<number>(0);
    const [musicCategoryIndex, setMusicCategoryIndex] = useState<number>(0);
    type MusicCategory = "nocturnal_reveries" | "distance_love";
    const musicCategories = [
        "nocturnal_reveries",
        "distance_love"
    ];
    const [musics, setMusics] = useState({
        "nocturnal_reveries": [
            {
                name: "aria - Chillhop Radio",
                src: "/nocturnal_reveries/aria.mp3",
            },
            {
                name: "aurora - Chillhop Radio",
                src: "/nocturnal_reveries/aurora.mp3",
            },
            {
                name: "dreamscape - Chillhop Radio",
                src: "/nocturnal_reveries/dreamscape.mp3",
            },
            {
                name: "dusk - Chillhop Radio",
                src: "/nocturnal_reveries/dusk.mp3",
            },
            {
                name: "i'm alone out here - Chillhop Radio",
                src: "/nocturnal_reveries/im_alone_out_here.mp3",
            },
        ],
        "distance_love": [
            {
                name: "bloom - Love Radio",
                src: "/distance_love/bloom.mp3",
            },
            {
                name: "come closer - Love Radio",
                src: "/distance_love/come_closer.mp3",
            },
            {
                name: "faraway - Love Radio",
                src: "/distance_love/faraway.mp3",
            },
            {
                name: "good morning love - Love Radio",
                src: "/distance_love/good_morning_love.mp3",
            },
            {
                name: "it's ok - Love Radio",
                src: "/distance_love/its_ok.mp3",
            },
            {
                name: "looking at the moon - Love Radio",
                src: "/distance_love/looking_at_the_moon.mp3",
            },
            {
                name: "miss you - Love Radio",
                src: "/distance_love/miss_you.mp3",
            },
            {
                name: "soul searching - Love Radio",
                src: "/distance_love/soul_searching.mp3",
            },
            {
                name: "station to station - Love Radio",
                src: "/distance_love/station_to_station.mp3",
            },
            {
                name: "your eyes - Love Radio",
                src: "/distance_love/your_eyes.mp3",
            },
        ]
    });
    const [ musicName, setMusicName ] = useState('');


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
            setMusicIndex(0);
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
            setMusicCategoryIndex(0);
        } else {
            setMusicCategoryIndex(musicCategoryIndex + 1);
        }
    }

    const onPreviousCategory = () =>{
        if (musicCategoryIndex === 0) {
            setMusicCategoryIndex(musicCategories.length - 1);
        } else {
            setMusicCategoryIndex(musicCategoryIndex - 1);
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