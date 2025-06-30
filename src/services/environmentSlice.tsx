'use client'
import { createSlice } from '@reduxjs/toolkit';

export const environmentController = createSlice({
    name: 'environment',
    initialState: {
        showCrtLines: true,
    },
    reducers: {
        toggleCrtLines: (state: { showCrtLines: boolean }) => {
            state.showCrtLines = !state.showCrtLines;
        },
    }
});

export const {
    toggleCrtLines,
} = environmentController.actions;

export default environmentController.reducer;

