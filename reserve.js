import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { updateFilm,getUniqueFilm } from '../../api/movieapi'
import { useState } from 'react'

function UpdateMovie() { 
    const [titre,setTitre] = useState('')
    const [image,setImage] = useState('')
    const [video,setVideo] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [personnage,setPersonnage] = useState('')
    const [rate,setRate] = useState('')
  const navigator = useNavigate()
const {id}=useParams()



  const update=async(values,id)=>{
    await updateFilm(values,id)
    navigator('/list') 


   
  
  }
  
  return (
    

  <div >
    <div>
  <input className='titre' placeholder='titre du film' value={titre} onChange = {(e)=>setTitre (e.target.value)}  />
  <span ></span>
  </div>
  <div>
      <input className='rate' placeholder='rate du film'value={rate} onChange = {(e)=> setRate(e.target.value)} />
      <span ></span>
      </div>
      <div>
      <input className='decrire' placeholder='description du film'value={description} onChange = {(e)=>setDescription (e.target.value)} />
      <span ></span>
      </div>
      <div>
      <input className='date' placeholder='date du film'value={date} onChange = {(e)=>setDate (e.target.value)} />
      <span ></span>
      </div>
      <div>
      <input className='photo' placeholder='image du film'value={image} onChange = {(e)=> setImage(e.target.value)} />
      <span ></span>
      </div>
      <div>
      <input className='video' placeholder='video du film'value={video} onChange = {(e)=> setVideo(e.target.value)} />
      <span ></span>
      </div>
      <div>
      <input className='auteur' placeholder='auteur'value={personnage} onChange = {(e)=> setPersonnage(e.target.value)} />
      <span ></span>
      </div>
      <a><button type="button" onClick={()=>update(id,{image,personnage,titre,description,date,rate,video})}  >add new movie</button></a>
  </div>
    
   

  )
}

export default UpdateMovie