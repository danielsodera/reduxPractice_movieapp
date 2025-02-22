import './App.css'
import { MovieList } from './components/MovieList'
import { useSelector } from 'react-redux'

function App() {

  const movies = useSelector((store) => store.movies)

  return (
    <>
     <MovieList movies={movies} /> 
    </>
  )
}

export default App
