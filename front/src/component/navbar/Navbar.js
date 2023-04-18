import React from 'react'
import './Navbar.css'
import { Button } from 'bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faEject} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faOutdent} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
 
  return (
    <div><ul>
    <li><a  ><FontAwesomeIcon icon={faHouse} /><Link to={'/home'} >Home</Link></a></li>
    
    <li><a><FontAwesomeIcon icon={faEject} /><Link to={'/'}>About</Link></a></li>
    <li><a><FontAwesomeIcon icon={faPhone} /><Link to={'/footer'}>Contact us</Link></a></li>
    <li><a><FontAwesomeIcon icon={faPlay} /><Link to={'/list'}>PlayList</Link></a></li>
    <li><a><FontAwesomeIcon icon={faPlus} /><Link to={'/addMovie'}>add video</Link></a></li>
    <li><a><FontAwesomeIcon icon={faOutdent} /><Link className='logout' to ={'/'}>Logout</Link></a></li> 
  
    

  </ul></div>
  )
}




                 
       


export default Navbar
