import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Add = ({add}) => { 
    const[titre,setTitre]= useState ('')
    const[date,setDate]= useState ('2012')
    const[description,setDescription]= useState ('')
    const[image, setImage]= useState ('')
    const[rate,setRate]= useState ('3') 
    const[video,setVideo]= useState ('') 
    const[personnage,setPersonnage]= useState ('') 
    const handleAdd = () =>{
        add(
            { id:uuidv4 (),
                titre:titre,
                description:description,
                rate:rate,
                date:date,
                image:image, 
                video:video,
                personnage:personnage,


            }
        )
    }
  return (
    <div>
      <input placeholder='titre du film' value={titre} onChange = {(e)=>setTitre (e.target.value)}  />
      <input placeholder='rate du film'value={rate} onChange = {(e)=> setRate(e.target.value)} />
      <input placeholder='description du film'value={description} onChange = {(e)=>setDescription (e.target.value)} />
      <input placeholder='date du film'value={date} onChange = {(e)=>setDate (e.target.value)} />
      <input placeholder='image du film'value={image} onChange = {(e)=> setImage(e.target.value)} />
      <input placeholder='video du film'value={video} onChange = {(e)=> setVideo(e.target.value)} />
      <input placeholder='auteur'value={personnage} onChange = {(e)=> setPersonnage(e.target.value)} />
      <button onClick = {()=> handleAdd ()} >add movie </button>
    </div>
  )
}

export default Add
