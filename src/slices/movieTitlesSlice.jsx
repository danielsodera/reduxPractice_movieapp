import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieNames: [
    {name: 'The Batman'},
    {name: 'Intersteller'}
    ]   
}; 

const movieTitles = createSlice({
    name: 'movieTitles', 
    initialState, 
    reducers: {
        addMovie: (state, action) => {
            state.movieNames.push({name: action.payload})
        },
        removeMovie: (state, action) => {
        }

    }
})

export const {addMovie, removeMovie} = movieTitles.actions;
export default movieTitles.reducer; 