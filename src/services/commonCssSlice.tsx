'use client'
import { createSlice } from '@reduxjs/toolkit';

export const commonCSSController = createSlice({
    name: 'commonCSS',
    initialState: {
        defaultTextEffect: '',
        chillTextEffect: 'green-shadow',
        kawaiiTextEffect: 'white'
    },
    reducers: {
        switchCommonCSSToChill: (state: { defaultTextEffect: string, chillTextEffect: string }) =>{
            state.defaultTextEffect = state.chillTextEffect;
        },
        switchCommonCSSToKawaii: (state: { defaultTextEffect: string, kawaiiTextEffect: string }) =>{
            state.defaultTextEffect = state.kawaiiTextEffect;
        }
    }
});

export const {
    switchCommonCSSToChill,
    switchCommonCSSToKawaii
} = commonCSSController.actions;

export default commonCSSController.reducer;