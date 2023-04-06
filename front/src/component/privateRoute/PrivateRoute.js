import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setAuth } from '../../store/AuthSlice' 
import { fetchAcountAuth } from '../../api/Auth'
const PrivateRoute = () =>{ 
const dispatch = useDispatch()
const navigate = useNavigate()
const Auth = useSelector(state=>state.AuthUser)
console.log('authentifcation user redux', Auth ) 

const  getUserAuth = async()=>{
const data = await fetchAcountAuth()
console.log("data fetched db" ,data)  
} 
useEffect(()=> {
    getUserAuth()
},[])


    return(
        <div>privateRoute</div>
    )
} 
export default PrivateRoute