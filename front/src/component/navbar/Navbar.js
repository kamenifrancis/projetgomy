import React from 'react'
import './Navbar.css'
import { Button } from 'bootstrap'
import {Link} from 'react-router-dom'
const Navbar = () => {
 
  return (
    <div><ul>
    <li><a  ><Link to={'/home'} >Home</Link></a></li>
    <li><a><Link to={'/'}>About</Link></a></li>
    <li><a><Link to={'/footer'}>Contact us</Link></a></li>
    <li><a><Link to={'/movieList'}>PlayList</Link></a></li>
    <li><a><Link to={'/addMovie'}>add video</Link></a></li>
    <li><a><Link to={'/'}>Logout</Link></a></li>
  </ul></div>
  )
}




                 
       


export default Navbar
