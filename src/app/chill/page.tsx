'use client'
import "./chill.css";
import { useState } from "react";
import { Provider } from 'react-redux';
import { store } from '@/services/store';
import { MusicCategoryPanel } from "@/components/musicCategory";
import { InitialProcesses, ScreenEffects, StartScreen, MainScreen } from '@/components/musicPage';

export default function Page() {
    const [startChill, setStartChill] = useState(true);

    return (
        <Provider store={store}>
            <InitialProcesses />
            <div id="container" className="cursor-pointer select-none">
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