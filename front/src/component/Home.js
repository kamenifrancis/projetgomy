import Navbar from "./navbar/Navbar"
import './home.css'
import User from "./user/User"
import { Link } from "react-router-dom"
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home =()=>{
    return(
        <div> 
            <Navbar/> 
          
            <section className="hom">
      <h1>
        welcome  to 
        </h1>  
        <h1  className='site'>AllTube</h1>
        <div>
                    <User/>
                </div>
        </section>
        <section>
<div>
    Find out   <a><FontAwesomeIcon icon={faPlay} /><Link to={'/list'}>PlayList</Link></a>
</div>
            </section>      
        </div>
    )
}
export default Home