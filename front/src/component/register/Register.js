import React , {useState} from 'react'
import './register.css'
import { useNavigate } from 'react-router';
import { postAuthContact } from '../../api/Auth';
const Register = () => {

let navigate = useNavigate()

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handelAdd=async(values)=>{ 
await postAuthContact(values)
navigate('/login')
} 

return  (
    <div>
      
      <main>
<div className="row">
    <div className="colm-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lszmDBbLeU8gFVrGEvg3rHfbiVjLSNVR3A&usqp=CAU" alt="Logo"/>
        <h2><span>You Account. </span>register,share videos and pictures on:</h2> 
        <h1 className='site'>AllTube</h1>
    </div>
    <div className="colm-form">
        <div className="form-container">
         
            <input type="text" placeholder="Email address "  value={email}  
            
            onChange={(e)=>setEmail(e.target.value)} />
      
            <input type="password" placeholder="Password" value={password}  
            
            onChange={(e)=>setPassword(e.target.value)} />
  
           <input type="text" placeholder="name"  
           value={name}  
            
           onChange={(e)=>setName(e.target.value)}/>
       
            <button className="btn-login" onClick={()=>handelAdd({name,password,email})} >Register</button>
            <br/>
            <button className="btn-new"onClick={()=>navigate('/login')} >login  Account</button>
        </div>
    </div>
</div>
</main>
    </div>
   )
}
  
export default Register
