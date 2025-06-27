'use client'
import { createSlice } from '@reduxjs/toolkit';
import { musicIndexObjType, chillMusicIndexObj, musicsObjType, chillMusicsObj, chillMusicCategories, MusicCategory, musicBgObjType, chillMusicBgObj, musicCategoriesType } from '@/dictionaries/musicsDict';
import _ from 'lodash';

const _getMusicObj = (musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, _mIndex: number, _mCategoryIndex: number) =>{
    return innerMusicObj[musicCategories[_mCategoryIndex].id as MusicCategory][_mIndex];
}
const _getMusicBgObj = (musicCategories: musicCategoriesType, innerMusicBgObj: musicBgObjType, _mBgIndex: number, _mCategoryIndex: number) =>{
    return innerMusicBgObj[musicCategories[_mCategoryIndex].id as MusicCategory][_mBgIndex];
}


export const musicController = createSlice({
    name: 'background',
    initialState: {
        // basic states
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
        musicCategories: chillMusicCategories as musicCategoriesType,
        musicIndexObj: chillMusicIndexObj as musicIndexObjType,
        innerMusicObj: chillMusicsObj as musicsObjType,
        innerMusicBgObj: chillMusicBgObj as musicBgObjType,
    },
    reducers: {
        switchToChill: (state: {musicCategories: musicCategoriesType, musicIndexObj: musicIndexObjType, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType}) =>{
            state.musicCategories = chillMusicCategories;
            state.musicIndexObj = chillMusicIndexObj;
            state.innerMusicObj = chillMusicsObj;
            state.innerMusicBgObj = chillMusicBgObj;
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
            if(state.musicIndex === state.innerMusicObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory].length - 1){
                state.musicIndex = 0;
            } else {
                state.musicIndex++;
            }

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setPreviousMusicIndex: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicIndex === 0){
                state.musicIndex = state.innerMusicObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory].length - 1;
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

            state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;

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

            state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;
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

            state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;
        },
        shuffleMusics: (state: {musicCategories: musicCategoriesType, innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            state.innerMusicObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(state.innerMusicObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory])

            const obj = _getMusicObj(state.musicCategories, state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        shuffleMusicBg: (state: {musicCategories: musicCategoriesType, musicBgSrc: string, innerMusicBgObj: musicBgObjType, musicBgIndex: number, musicCategoryIndex: number}) =>{
            state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(state.innerMusicBgObj[state.musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.musicCategories, state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;
        }
    }
});

export const {
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

