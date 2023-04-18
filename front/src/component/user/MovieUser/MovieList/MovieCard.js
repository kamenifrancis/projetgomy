
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import './MovieCard.css' 
import React from 'react';
import { deleteFilm } from '../../../../api/movieapi'; 
import CommentSection from '../../../CommentSection'; 
import LikeButton from '../../../reagir/Like';
import VideoPlayer from '../../../reagir/Vue';

const MovieCards = ({movies ,getfilm}) => { 
  const navigate = useNavigate()
  const handeldelet = async(id)=>{
    await deleteFilm (id) 
    navigate('/list') 
  }
const handelUpdat=()=>{
  navigate( `/update/${movies._id}`)
  
}

  console.log('movies',movies) 
 
 
 return (
     <div class="container">
 
  <div class="row">
    <label>{movies.image}</label>
   <span></span>
    
  </div>
  <div class="row">
    <label>{movies.personnage}</label>
    <span></span>
   
  </div>
  <div class="row">
    <label>{movies.titre}</label>
    <span></span> 
    <div>
    <label>{movies.description}</label>
    <span></span>  
    </div> 
    <div>
    <label>{movies.date}</label>
    <span></span> 
    <div>
    <label>{movies.rate}</label>
    <span></span> 
    </div>
    </div> 
    <div>
    <label>{movies.video}</label>
    <span></span> 
    </div>
        <VideoPlayer/>
        <a href='#'><button  onClick={()=>handelUpdat()}>update</button></a>
    <a href='#'><button className='supr' onClick={()=>handeldelet(movies._id)}>delete</button></a>
     <LikeButton/>
    <p>
<CommentSection />
</p>
    </div> 
    </div>
  )
}

export default MovieCards