'use client'
import { createSlice } from '@reduxjs/toolkit';

export const musicCategoryController = createSlice({
    name: 'category',
    initialState: {
        showPanel: false
    },
    reducers: {
        toggleShowPanel: (state: {showPanel: boolean}) => {
            state.showPanel = !state.showPanel;
        }
    }
});

export const {
    toggleShowPanel
} = musicCategoryController.actions;

export default musicCategoryController.reducer;