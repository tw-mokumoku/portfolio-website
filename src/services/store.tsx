'use client'
import { configureStore } from '@reduxjs/toolkit';
import musicController from '@/services/musicSlice';
import musicCategoryController from '@/services/musicCategorySlice';
import environmentController from '@/services/environmentSlice';

export const store = configureStore({
    reducer: {
        musicController: musicController,
        musicCategoryController: musicCategoryController,
        environmentController: environmentController
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;