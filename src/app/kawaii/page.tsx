'use client'
import "./chill.css";
import { useEffect } from "react";
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/services/store';
import { MusicCategoryPanel } from "@/components/musicCategory";
import { InitialProcesses, ScreenEffects, MainScreen } from '@/components/musicPage';
import { setMusicCategoryIndex, switchToKawaii } from '@/services/musicSlice';
import { switchCommonCSSToKawaii } from "@/services/commonCssSlice";

export default function Page() {

    return (
        <Provider store={store}>
            <InitialProcesses />
            <KawaiiInitialProcess />
            <div id="container" className="cursor-pointer select-none">
                <ScreenEffects />
                <MainScreen />
                <MusicCategoryPanel />
            </div>
        </Provider>
    )
}

function KawaiiInitialProcess(){
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(switchToKawaii());
        dispatch(switchCommonCSSToKawaii());
        dispatch(setMusicCategoryIndex(0));
        // eslint-disable-next-line
    }, []);

    return <></>;
}