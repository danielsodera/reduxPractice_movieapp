import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieNames: [
    {id: 1, name: 'The Batman'},
    {id: 2, name: 'Intersteller'}
    ]   
}; 

const movieTitles = createSlice({
    name: 'movieTitles', 
    initialState, 
    reducers: {
        addMovie: (state, action) => {
            const newId = state.movieNames[state.movieNames.length -1].id +1; 
            state.movieNames.push({id: newId, name: action.payload})
        },
        removeMovie: (state, action) => {
            state.movieNames = state.movieNames.filter((movie) => movie.id !== action.payload)
        }

    }
})

export const {addMovie, removeMovie} = movieTitles.actions;
export default movieTitles.reducer; 