import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import './update.css'
function  UpdateMovie(id,description,titre,rate,image,video,date,personnage) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Récupération des données de l'élément depuis la base de données
    axios.get('http://localhost:4000/movie/getfilm/:id')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFormSubmit = (event) => {
  
    // Envoi des données modifiées à la base de données
    axios.put(`http://localhost:4000/movie/${id}`, data)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return ( 
    <div>
     <Navbar/>
    <section className='sec'>
       
    
     
      <form onSubmit={handleFormSubmit}>
       
        <input  className='titre' type="text" id="title" name="title" placeholder='titre' value={data.title} onChange={handleInputChange} />
        <div />
        <div>
       
        <input className='rate' type="text" id="rate" name="rate" placeholder='rate' value={data.rate} onChange={handleInputChange} />
        </div>
        
        <textarea className='decrire' id="description" name="description" placeholder='description' value={data.description} onChange={handleInputChange} />
        <div /> 
        <div>
     
        <input className='date' type="text" id="date" name="date" placeholder='date' value={data.date} onChange={handleInputChange} />
        </div> 
        <div>
       
        <input className='photo'  placeholder='image du film'value={data.image} onChange = {handleInputChange} />
        </div> 
        <div>
        
        <input  className='video' type="video" id="video" name="video" placeholder='video' value={data.video} onChange={handleInputChange} />
        </div> 
        <div>
   
        <input  className='auteur' type="text" id="personnage" name="personnage" placeholder='auteur' value={data.personnage} onChange={handleInputChange} />
        </div> 
       
                <button  className='add' onClick={()=> handleFormSubmit({titre,rate,description,date,image,video,personnage})} type="button">Submit</button>
      </form>
    </section>
    </div>
  );
}

export default  UpdateMovie;
