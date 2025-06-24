'use client'
import { createSlice } from '@reduxjs/toolkit';

export const musicController = createSlice({
    name: 'background',
    initialState: {
        musicIndex: 0,
        musicCategoryIndex: 0
    },
    reducers: {
        setMusicIndex: (state: {musicIndex: number}, action: { payload: number }) => {
            state.musicIndex = action.payload;
        },
        setMusicCategoryIndex: (state: {musicCategoryIndex: number}, action: { payload: number }) => {
            state.musicCategoryIndex = action.payload;
        },
    }
});

export const { setMusicIndex, setMusicCategoryIndex } = musicController.actions;

export default musicController.reducer;

