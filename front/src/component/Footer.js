import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
<div>
<div className="ma-classe">
      
      
    <div
    
    className="w3-container w3-light-grey"
    style={{ padding: "128px 16px" }}
    id="contact"
  >
    <h1 className="w3-center">CONTACTEZ NOUS</h1>
    <p className="w3-center w3-large">Décrivez-nous votre projet à l’aide du formulaire ci-dessous. Notre équipe vous recontactera sous 24h pour vous faire une proposition d’accompagnement !</p>
    <div style={{ marginTop: 48 }}>
      
      <p>
        <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" /> Télèphone:
        +00 151515
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>{" "}
        Email: quete.technologie@gmail.com
      </p>
      <br />
      <form action="/action_page.php" target="_blank">
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Name"
            required=""
            name="Name"
          />
        </p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Email"
            required=""
            name="Email"
          />
        </p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Subject"
            required=""
            name="Subject"
          />
        </p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Message"
            required=""
            name="Message"
          />
        </p>
        <p>
          <button className="w3-button w3-black" type="submit">
            <i className="fa fa-paper-plane" /> ENVOYER
          </button>
        </p> 
      </form> 
      <li><a><Link to={'/login'}>Sing in</Link></a></li>
      
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipOiKbyLtaOZDYK_ek3vUQhd41ByqSEArKA&usqp=CAU" alt="Description de mon image"
        className="w3-image w3-greyscale"
        style={{ width: "100%", marginTop: 48 }}
      />
    </div>
  </div>
    

 

    </div>
 </div>

     
   
  )
     }  

export default Footer
