import { useNavigate } from 'react-router-dom'
import './MovieCard.css' 
import React from 'react';
import { deleteFilm } from '../../../../api/movieapi'; 
import CommentSection from '../../../CommentSection'; 
import LikeButton from '../../../reagir/Like';
import User from '../../User';

const MovieCards = ({movies}) => { 
  const navigate = useNavigate()
  const handeldelet = async(id)=>{
    await deleteFilm(id) 
    navigate('/list') 
  }
  const handelupdat=()=>{
    navigate('/update' )
    
  }
  
    console.log('movies',movies) 
 
 
 return ( 

  <div>
     <section className='fichier'>
      <div className='photo'>
        <img src={movies.image}
     alt=""
     width="300"
     height="241">

     </img>
     <LikeButton/>  
     </div>
     <div className='play'>
     <video width="320" height="240" controls>
      <source src= {movies.video} type='video/ogg'/> 
    </video>
    <LikeButton/>  
 
    </div> 
    <CommentSection />
    </section>
        <section className='apro'>
          <div className='per'>
      <p>{movies.personnage}</p>
      </div>
      <div className='titr'>
      <p>{movies.titre}</p> 
      </div> 
      </section> 
      <section className='modifier'>
        <div className='mod'>
      <button className='up' onClick={()=>handelupdat()}> uptade  </button>
      </div> 
      <div className='eff'>
    <a href='#'><button className='supr' onClick={()=>handeldelet(movies._id)}>delete</button></a>
    <section1 className='content'>
     <div className='ici'> 
      <p>{movies.description}</p>
      </div>
      <div className='temps'>
      <p>{movies.date}</p>
      </div> 
      <div className='note'>
      <p className='note'>{movies.rate}</p>
      </div> 
      </section1> 
    

    </div> 

        </section> 
        


 
      
    
     

      
   

    </div>
    
  
   
  
  )
}

export default MovieCards