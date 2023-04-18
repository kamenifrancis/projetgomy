import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const Login = () => {
  const navigate = useNavigate()

const [password,setPassword]=useState('')
const [email,setEmail]=useState('')



const handelLogin=async(values)=>{
try{
const res = await axios.post('http://localhost:4000/auth/login',values)
await localStorage.setItem('token',res.data.token)
navigate('/app/Private')
}catch(err){
  
console.log(err)
}
}

  return (



    <div>
    <main>
<div className="row">
  <div className="colm-logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lszmDBbLeU8gFVrGEvg3rHfbiVjLSNVR3A&usqp=CAU" alt="Logo"/>
      <h2><span>You Account. </span>connect,share videos and pictures on:</h2>
      <h1 className='site'>AllTube</h1>
  </div>
  <div className="colm-form">
      <div className="form-container">
       
          <input type="text" placeholder="Email address " value={email} 
          onChange={(e)=>setEmail(e.target.value)} />
    
          <input type="password" placeholder="Password"  value={password} 
          onChange={(e)=>setPassword(e.target.value)} />

     
          <br/>
          <button className="btn-new" onClick={()=>handelLogin({email,password})} >login  Account</button>
      </div>
  </div>
</div>
</main>
  </div>
  )
}

export default Login