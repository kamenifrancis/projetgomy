import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setAuth } from '../../store/AuthSlice' 
import { fetchAcountAuth } from '../../api/Auth'
import Admin from '../Admin/Admin'
import User from '../user/User'
import Login from '../login/Login' 
import Navbar from '../navbar/Navbar'
const PrivateRoute = () =>{ 
const dispatch = useDispatch()
const navigate = useNavigate()
const authentifcation = useSelector(state=>state.authUser)
console.log('authentifcation user redux', authentifcation ) 

const  getUserAuth = async()=>{
   const data =  await fetchAcountAuth()
console.log("data fetched db",data ) 
dispatch(setAuth(data))
} 
useEffect(()=> {
    getUserAuth()
},[]) 
// fonction logout 
const token = localStorage.getItem('token') 
const logout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
}

return (

    <div>
         <div>
{
  token ? (<>   <Navbar auth={authentifcation} logout={logout} /> 

  {authentifcation.role === "admin" ? (<Admin  auth={authentifcation} /> ):( <User   auth={authentifcation}/>) } 
  
   </>) : (<Login/>)
}
         </div>


    </div> 
        ) 
            }

export default PrivateRoute