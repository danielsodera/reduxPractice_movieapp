import './App.css'
import { MovieList } from './components/MovieList'
import { useSelector } from 'react-redux'

function App() {

  const movies = useSelector((state) => state.movies.movieNames)


  return (
    <>
     <MovieList movies={movies} /> 
    </>
  )
}

export default App
