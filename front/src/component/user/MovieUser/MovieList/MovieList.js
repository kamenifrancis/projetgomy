import React from 'react'
import MovieCards from './MovieCard'

const MovieList = ({MovieData}) => { 
   
  return ( 
    <div>
      {
        MovieData.map((el)=>   <MovieCards Movie = {el} /> )
            
      } 
      
      </div>
  )
}

export default MovieList