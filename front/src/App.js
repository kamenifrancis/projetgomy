import './App.css'; 
import Register from './component/register/Register';
import Login from './component/login/Login';
import PrivateRoute from './component/privateRoute/PrivateRoute'
import { Routes,Route } from 'react-router-dom'; 
import { useState } from 'react';
import Add from './component/user/MovieUser/AddMovie'; 
import MovieList from './component/user/MovieUser/MovieList/MovieList';
import Footer from './component/Footer'; 
import UpdateMovie from './component/update/Update'


import About from './component/about';
import Home from './component/Home';




const App = ()=> { 
 

  return (
    <div classtitre="App"> 
 
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/app/Private' element={<PrivateRoute/>}/> 
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/list'element={<MovieList/>}/>
      <Route path='/addMovie' element={ <Add />}/> 
      <Route path='/update' element={<UpdateMovie/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={< About/>}/>
      
    
    </Routes> 
    
 
    
    </div>
  );
}

export default App;
