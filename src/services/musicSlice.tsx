'use client'
import { createSlice } from '@reduxjs/toolkit';
import { musicsObjType, musicsObj, musicCategories, MusicCategory, musicBgObj, musicBgObjType } from '@/dictionaries/musicsDict';
import _ from 'lodash';

const _getMusicObj = (innerMusicObj: musicsObjType, _mIndex: number, _mCategoryIndex: number) =>{
    return innerMusicObj[musicCategories[_mCategoryIndex].id as MusicCategory][_mIndex];
}
const _getMusicBgObj = (innerMusicBgObj: musicBgObjType, _mBgIndex: number, _mCategoryIndex: number) =>{
    return innerMusicBgObj[musicCategories[_mCategoryIndex].id as MusicCategory][_mBgIndex];
}

export const musicController = createSlice({
    name: 'background',
    initialState: {
        musicIndex: 0,
        musicBgIndex: 0,
        musicCategoryIndex: 0,
        musicName: 'aria - Chillhop Radio',
        musicSrc: '/music/chill/mp3/chillhop_radio/aria.mp3',
        musicBgSrc: '/music/chill/gif/chillhop_radio/cat_night.gif',
        innerMusicObj: musicsObj,
        innerMusicBgObj: musicBgObj,
    },
    reducers: {
        setMusicIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicIndex = action.payload;

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setNextMusicIndex: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicIndex === musicsObj[musicCategories[state.musicCategoryIndex].id as MusicCategory].length - 1){
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
                state.musicIndex = musicsObj[musicCategories[state.musicCategoryIndex].id as MusicCategory].length - 1;
            } else {
                state.musicIndex--;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        setMusicCategoryIndex: (state: {musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicCategoryIndex = action.payload;

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            state.innerMusicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(musicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;

        },
        setNextMusicCategoryIndex: (state: {musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === musicCategories.length - 1){
                state.musicCategoryIndex = 0;
            } else {
                state.musicCategoryIndex++;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            state.innerMusicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(musicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;
        },
        setPreviousMusicCategoryIndex: (state: {musicBgSrc: string, innerMusicObj: musicsObjType, innerMusicBgObj: musicBgObjType, musicName: string, musicSrc: string, musicIndex: number, musicBgIndex: number, musicCategoryIndex: number}) =>{
            if(state.musicCategoryIndex === 0){
                state.musicCategoryIndex = musicCategories.length - 1;
            } else {
                state.musicCategoryIndex--;
            }

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;

            state.innerMusicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(musicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
            state.musicBgSrc = _musicBgSrc;
        },
        shuffleMusics: (state: {innerMusicObj: musicsObjType, musicName: string, musicSrc: string, musicIndex: number, musicCategoryIndex: number}) =>{
            state.innerMusicObj[musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(musicsObj[musicCategories[state.musicCategoryIndex].id as MusicCategory])

            const obj = _getMusicObj(state.innerMusicObj, state.musicIndex, state.musicCategoryIndex);
            state.musicName = obj.name;
            state.musicSrc = obj.src;
        },
        shuffleMusicBg: (state: {musicBgSrc: string, innerMusicBgObj: musicBgObjType, musicBgIndex: number, musicCategoryIndex: number}) =>{
            state.innerMusicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory] = _.shuffle(musicBgObj[musicCategories[state.musicCategoryIndex].id as MusicCategory]);
            const _musicBgSrc = _getMusicBgObj(state.innerMusicBgObj, state.musicBgIndex, state.musicCategoryIndex);
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
    shuffleMusicBg
} = musicController.actions;

export default musicController.reducer;

