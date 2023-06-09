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
const auth = useSelector(state=>state.authUser)
console.log('authentifcation user redux', auth ) 

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
  token ? (<>   <Navbar auth={auth} logout={logout} /> 

  {auth.role === "admin" ? (<Admin  auth={auth} /> ):( <User   auth={auth}/>) } 
  
   </>) : (<Login/>)
}
         </div>


    </div> 
        ) 
            }

export default PrivateRoute