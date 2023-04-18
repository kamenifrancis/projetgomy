import React, { useEffect } from 'react'
import MovieCards from './MovieCard'
import { fetchFilm } from '../../../../api/movieapi'
import { setMovie } from '../../../../store/movieSlice'
import {useSelector,useDispatch} from 'react-redux'
import SearchBar from '../../../recherche/Bar';
const MovieList = () => { 
  const Movies = useSelector(state=>state.movie) 
  const dispatch=useDispatch()
  console.log('movie issue de redux',MovieList)
  const getAll = async()=>{
   const data = await fetchFilm() 
   dispatch(setMovie(data.movie))
  }
  useEffect( ()=>{
    getAll()
  },[])
  return ( 
    <div>  
    <h1 className='site'>AllTube</h1>
      <p>
      <SearchBar/> 
      </p> 
      <div>
      {
       
       Movies.map( (e)=>  <MovieCards  movies = {e}/>)    
      } 
      </div>
      </div>
  )
}

export default MovieList