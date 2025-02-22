import { configureStore } from "@reduxjs/toolkit";
import movieTitlesReducer from './slices/movieTitlesSlice';

export const store = configureStore({
    reducer: {
        movies: movieTitlesReducer
    }
})