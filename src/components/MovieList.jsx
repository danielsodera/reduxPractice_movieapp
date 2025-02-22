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

const handleDeleteClick = (id) => {
    dispatch(removeMovie(id))
}

// console.log(movies);

    return (
        <>
        <input type="text" onChange={((e) => setSearch(e.target.value))} value={search}/> 
        <button onClick={handleSearchClick}>Add</button>
        <h1>Movie List</h1>
        <ul>
        {movies.map((movie, index) => <div key={movie.id}>{movie.name}<button onClick={() => handleDeleteClick(movie.id)}>Delete</button></div>)}
        </ul>
        
        </>
    )


}