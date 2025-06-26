'use client'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { musicBgObj, MusicCategory, musicCategories, musicIndex } from "@/dictionaries/musicsDict";
import { setMusicCategoryIndex } from '@/services/musicSlice';
import { toggleShowPanel } from '@/services/musicCategorySlice';

export function MusicCategoryPanel(){
    const dispatch = useDispatch();
    const {
        showPanel
    } = useSelector((state: {
        musicCategoryController: {
            showPanel: boolean
        }
    }) => state.musicCategoryController);

    return (
        <>
        { showPanel ?
            <div className="absolute h-full w-full z-9" style={{ background: "rgba(0, 0, 0, 0.7)" }}
            onClick={() => dispatch(toggleShowPanel())}
            >
                    <CategoryPanels />
            </div>
            :
            <></>
        }
        </>
    );
}

function CategoryPanels(){
    return (
        <div className="grid grid-flow-col auto-col-max justify-start">
            {
                musicCategories.map(({id, raw}) => <Panels musicId={id} musicRaw={raw} key={id}/>)
            }
        </div>
    );
}

function Panels({musicId, musicRaw}:{musicId: string, musicRaw: string}){
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col m-5 z-2 pointer"
            onClick={()=>dispatch(setMusicCategoryIndex(musicIndex[musicId as MusicCategory].id))}
        >
            <div className="w-60 h-35">
                <Image src={musicBgObj[musicId as MusicCategory][0]} fill alt={musicId} style={{ overflow: "clip", overflowClipMargin: "content-box", objectFit: "cover" }} />
            </div>
            <p id="shadow">{musicRaw}</p>
        </div>
    );
}