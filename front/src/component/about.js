import React from "react"
import User from "./user/User"
import Navbar from "./navbar/Navbar" 
import Foota from "./Foota"
import { Link } from "react-router-dom"
const About=()=>{
 
return(
    <div> 
             < Navbar/>
    
    <section className='haut' >
    <h1  className='site'><Link to={'/about'}>AllTube</Link></h1>
  
<div className='prof'><User/></div>
    </section>
<p>
    AllTube is a platform where you can add videos,pictures with thier rate, description, title and the name of the auther and you can share with evry user who has an<a href="https://swoopnow.com/website-authentication/"> authentificated</a> account on the site.
</p> 
<p>
    You can also like, unlike and comment diffrent files on the webside. 
</p> 
<p>
    created by a <a href="https://gomycode.com/TN-FR/home"> gomycode</a> student.   gomycode 2023.
</p> 
<Foota/>
    </div> 
   
)

}
export default About
