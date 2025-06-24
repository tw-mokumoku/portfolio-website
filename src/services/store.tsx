'use client'
import { configureStore } from '@reduxjs/toolkit';
import musicController from '@/services/musicSlice';

export const store = configureStore({
    reducer: {
        musicController: musicController,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;