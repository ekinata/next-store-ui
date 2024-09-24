import { combineReducers } from '@reduxjs/toolkit';
import lightboxReducer from './lightbox';

// Reducer'ları birleştiriyoruz
export const rootReducer = combineReducers({
    lightboxReducer, // Örnek reducer
});

// RootState tipini tanımlama
export type RootState = ReturnType<typeof rootReducer>;
