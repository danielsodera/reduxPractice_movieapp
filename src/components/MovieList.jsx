import React, { use } from 'react'; 
import { useState } from 'react';
import { addMovie, removeMovie } from '../slices/movieTitlesSlice';
import { useDispatch } from 'react-redux';

export const MovieList = ({movies}) => {

    const dispatch = useDispatch(); 

const [search, setSearch] = useState("");

const handleSearchClick = () => {
    dispatch(addMovie(search))

}

const handleDeleteClick = () => {

}

// console.log(movies);

    return (
        <>
        <input type="text" onChange={((e) => setSearch(e.target.value))} value={search}/> 
        <button onClick={handleSearchClick}>Add</button>
        <h1>Movie List</h1>
        <ul>
        {movies.map((movie, index) => <div key={index}>{movie.name}<button onClick={handleDeleteClick}>Delete</button></div>)}
        </ul>
        
        </>
    )


}