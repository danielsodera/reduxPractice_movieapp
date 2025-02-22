import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'The Batman'},
    {id: 2, name: 'Intersteller'}
]; 

const movies = createSlice({
    name: 'movies', 
    initialState, 
    reducers: {

    }
})


export default movies.reducer; 