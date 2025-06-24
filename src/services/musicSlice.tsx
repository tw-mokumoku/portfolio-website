'use client'
import { createSlice } from '@reduxjs/toolkit';
import { musicsObjType, musicsObj, musicCategories, MusicCategory } from '@/dictionaries/musicsDict';
import _ from 'lodash';

const _getMusicObj = (innerMusicObj: musicsObjType, _mIndex: number, _mCategoryIndex: number) =>{
    return innerMusicObj[musicCategories[_mCategoryIndex] as MusicCategory][_mIndex]
}

export const musicController = createSlice({
    name: 'background',
    initialState: {
        musicIndex: 0,
        musicCategoryIndex: 0,
        musicName: 'aria - Chillhop Radio',
        musicSrc: '/nocturnal_reveries/aria.mp3',
        innerMusicObj: musicsObj
    },
    reducers: {
        setMusicIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicIndex = action.payload;

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setNextMusicIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicIndex === musicsObj[musicCategories[state.musicCategoryIndex] as MusicCategory].length - 1){
                state.musicIndex = 0;
            } else {
                state.musicIndex++;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setPreviousMusicIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicIndex === 0){
                state.musicIndex = musicsObj[musicCategories[state.musicCategoryIndex] as MusicCategory].length - 1;
            } else {
                state.musicIndex--;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setMusicCategoryIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicCategoryIndex = action.payload;

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setNextMusicCategoryIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === musicCategories.length - 1){
                state.musicCategoryIndex = 0;
            } else {
                state.musicCategoryIndex++;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setPreviousMusicCategoryIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === 0){
                state.musicCategoryIndex = musicCategories.length - 1;
            } else {
                state.musicCategoryIndex--;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        shuffleMusics: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            state.innerMusicObj[musicCategories[state.musicCategoryIndex] as MusicCategory] = _.shuffle(musicsObj[musicCategories[state.musicCategoryIndex] as MusicCategory])

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
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
    shuffleMusics
} = musicController.actions;

export default musicController.reducer;

