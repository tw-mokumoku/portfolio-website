'use client'
import { createSlice } from '@reduxjs/toolkit';
import { musicIndexObjType, chillMusicIndexObj, musicsObjType, chillMusicsObj, chillMusicCategories, musicBgObjType, chillMusicBgObj, musicCategoriesType, kawaiiMusicIndexObj, kawaiiMusicCategories, kawaiiMusicBgObj, kawaiiMusicsObj } from '@/dictionaries/musicsDict';
import _ from 'lodash';
import { switchCommonCSSToChill, switchCommonCSSToKawaii } from './commonCssSlice';

// 型定義
interface MusicItem {
    name: string;
    src: string;
}

const _getMusicObj = (musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, _mIndex: number, _mCategoryIndex: number): MusicItem => {
    const key = musicCategories[_mCategoryIndex].id;
    if (key in innerMusicObj) {
        return (innerMusicObj as Record<string, MusicItem[]>)[key][_mIndex];
    }
    throw new Error(`Category key ${key} not found in innerMusicObj`);
}

const _getMusicBgObj = (musicCategories: musicCategoriesType, innerMusicBgObj: musicBgObjType, _mBgIndex: number, _mCategoryIndex: number): string => {
    const key = musicCategories[_mCategoryIndex].id;
    if (key in innerMusicBgObj) {
        return (innerMusicBgObj as Record<string, string[]>)[key][_mBgIndex];
    }
    throw new Error(`Category key ${key} not found in innerMusicBgObj`);
}

export const musicController = createSlice({
    name: 'background',
    initialState: {
        
        // basic states
        mood: 'chill',
        musicIndex: 0,
        musicBgIndex: 0,
        musicCategoryIndex: 0,
        musicIsPlaying: true,
        volume: 0.75,
        musicIsMuted: false,
        musicName: 'aria - Chillhop Radio',
        musicSrc: '/music/chill/mp3/chillhop_radio/aria.mp3',
        musicBgSrc: '/music/chill/gif/chillhop_radio/cat_night.gif',

        // Requires injection
        innerMusicObj: chillMusicsObj as musicsObjType,
        innerMusicBgObj: chillMusicBgObj as musicBgObjType,
        musicCategories: chillMusicCategories as musicCategoriesType,
        musicIndexObj: chillMusicIndexObj as musicIndexObjType,
    },
    reducers: {
        switchToChill: (state: {mood: string, musicIndex: number, musicBgIndex: number, musicBgSrc: string, musicName: string, musicSrc: string, musicCategoryIndex: number, musicCategories: musicCategoriesType, musicIndexObj: musicIndexObjType, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType}) =>{
            if(state.mood === 'chill') return;
            state.mood = 'chill';
            state.musicIndex = 0;
            state.musicBgIndex = 0;
            state.musicCategories = chillMusicCategories;
            state.musicIndexObj = chillMusicIndexObj;
            state.innerMusicObj = chillMusicsObj;
            state.innerMusicBgObj = chillMusicBgObj;
            switchCommonCSSToChill();
            window.history.replaceState(null, '', '/chill');
        },
        switchToKawaii: (state: {mood: string, musicIndex: number, musicBgIndex: number, musicCategories: musicCategoriesType, musicIndexObj: musicIndexObjType, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType}) =>{
            if(state.mood === 'kawaii') return;
            state.mood = 'kawaii';
            state.musicIndex = 0;
            state.musicBgIndex = 0;
            state.musicCategories = kawaiiMusicCategories;
            state.musicIndexObj = kawaiiMusicIndexObj;
            state.innerMusicObj = kawaiiMusicsObj;
            state.innerMusicBgObj = kawaiiMusicBgObj;
            switchCommonCSSToKawaii();
            window.history.replaceState(null, '', '/kawaii');
        },
        toggleMusicIsMuted: (state: { musicIsMuted: boolean }) => {
            state.musicIsMuted = !state.musicIsMuted;
        },
        toggleMusicIsPlaying: (state: { musicIsPlaying: boolean }) => {
            state.musicIsPlaying = !state.musicIsPlaying;
        },
        setVolume: (state: {volume: number}, action: { payload: number }) => {
            state.volume = action.payload;
        },
        increaseVolume: (state: { volume: number }) => {
            state.volume = _.clamp(state.volume + 0.02, 0, 1);
        },
        decreaseVolume: (state: { volume: number }) => {
            state.volume = _.clamp(state.volume - 0.02, 0, 1);
        },
        setMusicIndex: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicIndex = action.payload;

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setNextMusicIndex: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            const key = state.musicCategories[state.musicCategoryIndex].id;
            if(state.musicIndex === (state.innerMusicObj as Record<string, MusicItem[]>)[key].length - 1){
                state.musicIndex = 0;
            } else {
                state.musicIndex++;
            }

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setPreviousMusicIndex: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            const key = state.musicCategories[state.musicCategoryIndex].id;
            if(state.musicIndex === 0){
                state.musicIndex = (state.innerMusicObj as Record<string, MusicItem[]>)[key].length - 1;
            } else {
                state.musicIndex--;
            }

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setMusicCategoryIndex: (state: {musicCategories: musicCategoriesType, musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicCategoryIndex = action.payload;

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            const key = state.musicCategories[state.musicCategoryIndex].id;
            if (key in state.innerMusicBgObj) {
                (state.innerMusicBgObj as Record<string, string[]>)[key] = _.shuffle((state.innerMusicBgObj as Record<string, string[]>)[key]);
                const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
                state.musicBgSrc = _musicBgSrc;
            }
        },
        setNextMusicCategoryIndex: (state: {musicCategories: musicCategoriesType, musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === state.musicCategories.length - 1){
                state.musicCategoryIndex = 0;
            } else {
                state.musicCategoryIndex++;
            }

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            const key = state.musicCategories[state.musicCategoryIndex].id;
            if (key in state.innerMusicBgObj) {
                (state.innerMusicBgObj as Record<string, string[]>)[key] = _.shuffle((state.innerMusicBgObj as Record<string, string[]>)[key]);
                const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
                state.musicBgSrc = _musicBgSrc;
            }
        },
        setPreviousMusicCategoryIndex: (state: {musicCategories: musicCategoriesType, musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === 0){
                state.musicCategoryIndex = state.musicCategories.length - 1;
            } else {
                state.musicCategoryIndex--;
            }

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            const key = state.musicCategories[state.musicCategoryIndex].id;
            if (key in state.innerMusicBgObj) {
                (state.innerMusicBgObj as Record<string, string[]>)[key] = _.shuffle((state.innerMusicBgObj as Record<string, string[]>)[key]);
                const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
                state.musicBgSrc = _musicBgSrc;
            }
        },
        shuffleMusics: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            const key = state.musicCategories[state.musicCategoryIndex].id;
            if (key in state.innerMusicObj) {
                (state.innerMusicObj as Record<string, MusicItem[]>)[key] = _.shuffle((state.innerMusicObj as Record<string, MusicItem[]>)[key]);
            }
            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        shuffleMusicBg: (state: {musicCategories: musicCategoriesType, musicBgSrc: string, innerMusicBgObj: musicBgObjType, musicBgIndex: number, musicCategoryIndex: number}) =>{
            const key = state.musicCategories[state.musicCategoryIndex].id;
            if (key in state.innerMusicBgObj) {
                (state.innerMusicBgObj as Record<string, string[]>)[key] = _.shuffle((state.innerMusicBgObj as Record<string, string[]>)[key]);
                const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
                state.musicBgSrc = _musicBgSrc;
            }
        }
    }
});

export const {
    switchToChill,
    switchToKawaii,
    setMusicIndex,
    setNextMusicIndex,
    setPreviousMusicIndex,
    setMusicCategoryIndex,
    setNextMusicCategoryIndex,
    setPreviousMusicCategoryIndex,
    shuffleMusics,
    shuffleMusicBg,
    increaseVolume,
    decreaseVolume,
    setVolume,
    toggleMusicIsPlaying,
    toggleMusicIsMuted
} = musicController.actions;

export default musicController.reducer;

