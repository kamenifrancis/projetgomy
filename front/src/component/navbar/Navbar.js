import React from 'react'
import './Navbar.css'
import { Button } from 'bootstrap'

const Navbar = ({Auth,logout}) => {
  console.log('Auth ', Auth)
  return (
   

       <nav className="navMenu"> 
     <a>{Auth.name}</a>
{                                     
        Auth.role === "admin" ?  ( <>
             <a>Homepage</a>
           
             <a>profil</a>
             <a>contactList</a>
            
             </>): 
             ( <>
             <a >Homepage user</a>
             <a >user profil</a>
             <a >contact</a>
             <a>add contact</a>
             </>)
             
             }

  
      <Button  onClick={()=>logout()}>Logout</Button> 
      </nav>

  )
}

export default Navbar
