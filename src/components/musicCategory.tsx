'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { musicBgObjType, chillMusicCategories, musicIndexObjType, chillMusicBgObj, chillMusicIndexObj, chillMusicCategory, kawaiiMusicCategories, kawaiiMusicIndexObj, kawaiiMusicBgObj, kawaiiMusicCategory } from "@/dictionaries/musicsDict";
import { setMusicCategoryIndex, switchToChill, switchToKawaii } from '@/services/musicSlice';
import { toggleShowPanel } from '@/services/musicCategorySlice';
import { useEffect, useState } from "react";
import { switchCommonCSSToChill, switchCommonCSSToKawaii } from "@/services/commonCssSlice";

// 型ガード関数
const isChillMusicIndexObj = (obj: musicIndexObjType): obj is typeof chillMusicIndexObj => {
    return 'chillhop_radio' in obj;
};

const isKawaiiMusicIndexObj = (obj: musicIndexObjType): obj is typeof kawaiiMusicIndexObj => {
    return 'kawaii_edm' in obj;
};

const isChillMusicBgObj = (obj: musicBgObjType): obj is typeof chillMusicBgObj => {
    return 'chillhop_radio' in obj;
};

const isKawaiiMusicBgObj = (obj: musicBgObjType): obj is typeof kawaiiMusicBgObj => {
    return 'kawaii_edm' in obj;
};

export function MusicCategoryPanel(){
    const dispatch = useDispatch();
    const {
        showPanel
    } = useSelector((state: {
        musicCategoryController: {
            showPanel: boolean
        }
    }) => state.musicCategoryController);
    const [mood, setMood] = useState("chill");

    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    const handleMoodChange = (newMood: string) => {
        setMood(newMood);
    };

    return (
        <>
        { showPanel ?
            <>
                <div className="absolute h-full w-full z-1" />
                <div className="absolute h-full w-full z-9 flex flex-col items-center" style={{ background: "rgba(0, 0, 0, 0.7)" }}
                    onClick={() => dispatch(toggleShowPanel())}
                >
                    <div id="mood" className="grid grid-flow-col auto-col-max justify-start">
                        <div className="flex flex-col m-5 z-99 pointer" // chill
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMoodChange("chill");
                            }}
                        >
                            <div className="w-60 h-35">
                                <Image src="/music/chill/gif/chill_category.gif" fill alt="chill" style={{ overflow: "clip", overflowClipMargin: "content-box", objectFit: "cover" }} />
                            </div>
                            <p className={`${defaultTextEffect}`}>Chill</p>
                        </div>
                        <div className="flex flex-col  m-5 z-2 pointer" // kawaii
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMoodChange("kawaii");
                            }}
                        >
                            <div className="w-60 h-35">
                                <Image src="/music/kawaii/gif/kawaii_category.gif" fill alt="kawaii" style={{ overflow: "clip", overflowClipMargin: "content-box", objectFit: "cover" }} />
                            </div>
                            <p className={`${defaultTextEffect}`}>Kawaii</p>
                        </div>
                    </div>
                    <div style={{ background: "rgba(255, 255, 255, 0.5)", height: "2px" }} className={`w-full ${defaultTextEffect}`} />
                    <CategoryPanels mood={mood}/>
                </div>
            </>
            :
            <></>
        }
        </>
    );
}

function CategoryPanels({mood}:{mood:string}){
    const [panels, setPanels] = useState<React.JSX.Element[]>([]);
    useEffect(()=>{
        if(mood === "chill") {
            setPanels(chillMusicCategories.map(({id, raw}) => 
                <Panels musicId={id} musicRaw={raw} key={id} musicIndexObj={chillMusicIndexObj} musicBgObj={chillMusicBgObj} />
            ));
        }
        if(mood === "kawaii") {
            setPanels(kawaiiMusicCategories.map(({id, raw}) => 
                <Panels musicId={id} musicRaw={raw} key={id} musicIndexObj={kawaiiMusicIndexObj} musicBgObj={kawaiiMusicBgObj} />
            ));
        }
    }, [mood]);
    return (
        <div className="grid grid-flow-col auto-col-max justify-start">
            { panels }
        </div>
    );
}

function Panels({musicId, musicRaw, musicIndexObj, musicBgObj}:{musicId: string, musicRaw: string, musicIndexObj: musicIndexObjType, musicBgObj: musicBgObjType}){
    const dispatch = useDispatch();

    const {
        defaultTextEffect
    } = useSelector((state: {
        commonCSSController: {
            defaultTextEffect: string
        }
    }) => state.commonCSSController);

    const handleClick = () => {
        if (isChillMusicIndexObj(musicIndexObj)) {
            dispatch(switchToChill());
            dispatch(switchCommonCSSToChill());
            dispatch(setMusicCategoryIndex(musicIndexObj[musicId as chillMusicCategory].id));
        } else if (isKawaiiMusicIndexObj(musicIndexObj)) {
            dispatch(switchToKawaii());
            dispatch(switchCommonCSSToKawaii());
            dispatch(setMusicCategoryIndex(musicIndexObj[musicId as kawaiiMusicCategory].id));
        }
    };

    const getBgSrc = (): string => {
        if (isChillMusicBgObj(musicBgObj)) {
            return musicBgObj[musicId as chillMusicCategory][0];
        } else if (isKawaiiMusicBgObj(musicBgObj)) {
            return musicBgObj[musicId as kawaiiMusicCategory][0];
        }
        return "";
    };

    return (
        <div className="flex flex-col m-5 z-2 pointer"
            onClick={handleClick}
        >
            <div className="w-60 h-35">
                <Image src={getBgSrc()} fill alt={musicId} style={{ overflow: "clip", overflowClipMargin: "content-box", objectFit: "cover" }} />
            </div>
            <p className={`${defaultTextEffect}`}>{musicRaw}</p>
        </div>
    );
}