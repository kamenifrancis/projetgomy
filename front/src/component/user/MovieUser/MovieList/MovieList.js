import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCard'
import { fetchFilm } from '../../../../api/movieapi'
import { setMovie } from '../../../../store/movieSlice'
import {useSelector,useDispatch} from 'react-redux'
import SearchBar from '../../../recherche/Bar'; 
import Navbar from '../../../navbar/Navbar'
import User from '../../User'
import './movielist.css'
const MovieList = () => { 
  const Movies = useSelector(state=>state.movie) 
  const dispatch=useDispatch()
  console.log('movie issue de redux',MovieList)
  const getAll = async()=>{
   const data = await fetchFilm() 
   console.log('data', data.film)
   dispatch(setMovie(data.film))
  }
  useEffect( ()=>{
    getAll()
   },) 
  return ( 
    <div>  
      < Navbar/>
    
      <section className='haut' >
      <h1 className='site'>AllTube</h1>
      <div>
      <SearchBar/> 
      </div> 
<div className='prof'><User/></div>
      </section>
    
    

      <div>
      {
       
       Movies.map( (e)=>  <MovieCards  movies = {e}/>)    
      } 
      </div>
      </div>
  )
}

export default MovieList