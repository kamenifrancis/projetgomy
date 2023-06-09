import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postFilm } from '../../../api/movieapi'
import './add.css'

import Navbar from '../../navbar/Navbar'
import Foota from '../../Foota'
const Add=()=>{
  const [titre,setTitre] = useState('')
  const [image,setImage] = useState('')
  const [video,setVideo] = useState('')
  const [description,setDescription] = useState('')
  const [date,setDate] = useState('')
  const [personnage,setPersonnage] = useState('')
  const [rate,setRate] = useState('')
  const navigator = useNavigate()
  const handelAdd = async(values)=>{
   try{
    await postFilm(values)
    navigator('/list')
   }catch(err){console.log(err)}
  }
  return (
   <div > 
      <Navbar/>
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
      <a><button className='add' type="button" onClick={()=>handelAdd({titre,rate,description,date,image,video,personnage})}  >add movie</button></a> 
      <p>
       
      </p> 
      <Foota/>
    </div>
  )
}

export default Add
