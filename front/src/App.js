import './App.css'; 
import Register from './component/register/Register';
import Login from './component/login/Login';
import PrivateRoute from './component/privateRoute/PrivateRoute'
import { Routes,Route } from 'react-router-dom'; 
import Navba from './component/navbar/Navbar'; 
import { useState } from 'react';
import Add from './component/user/MovieUser/AddMovie'; 
import MovieList from './component/user/MovieUser/MovieList/MovieList';
import Footer from './component/Footer';

const App = ()=> { 
  const [MovieData,SetMovieData]= useState([
    { 
      id: Math.random(),
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIWdCeNdp0lmyc_bBf3pzd4oDDUXYlOVoCA&usqp=CAU",
      rate: 4,
      titre: "baré collé",
      date: "2021",
     video: " ",
     personnage:"muriel blancle",
      description:
        "quand je suis près de toi, tu ne sais pas l'effet que ça me fait, restes auprès de moi..."
    },
    {
      id: Math.random(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIRgjwaHXKWKrY5oDw3tLfnBHpcDY31_WVw&usqp=CAU",
      rate: 5,
      titre: "BONBON",
      date: "2018",
     video: "https://youtu.be/J-ORW55NSEc",
     personnage:"Blanche Bailly",
      description:
        "Je ne suis pas ton bonbon Non non non non nonTon bonbon Je ne suis pas ton bonbon Non non non non non Ton bonbon." ,
        commenter:"hghh",
    },
         ] ) 
         const add = (newMovie) =>{
          SetMovieData([...MovieData,newMovie]) 
        } 
  return (
    <div classtitre="App"> 
<Navba/>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/app/Private' element={<PrivateRoute/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/movieList'element={<MovieList MovieData={MovieData} />}/>
      <Route path='/addMovie' element={ <Add add= {add} />}/> 
    
    </Routes> 
    
     
    
    </div>
  );
}

export default App;
