'use client'
import { configureStore } from '@reduxjs/toolkit';
import musicController from '@/services/musicSlice';
import musicCategoryController from '@/services/musicCategorySlice';

export const store = configureStore({
    reducer: {
        musicController: musicController,
        musicCategoryController: musicCategoryController
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;