import React from 'react'
import MovieCards from './MovieCard'
const MovieList = ({MovieData}) => { 
  console.log('MovieData',MovieData) 
  return ( 
    <div>
      {
        MovieData.map((el)=>   <MovieCards Movie = {el} /> )
            
      } 
      
    </div>
  )
}

export default MovieList