import React, {useState}  from 'react'
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "./topnav.css"
import { useEffect } from "react";




function Topnav() {
  
const [click,setClick] = useState(false);
const handleClick =  () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const [button,setButton] = useState(true);
const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
}

useEffect(() =>{
    showButton();
})

window.addEventListener('resize', showButton);
    



  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
           <div className='logo'>
           <img src='gymicon.png' className='icon-pic'/>
            <h1 className='logo-text'>  BigBodyGym </h1>      
            </div>  
            <div className="mid-nav">
            <div className='menu-icon' onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
              <ul className={click ? "nav-menu active " : "nav-menu"}>   
        <li className='nav-item'>
        <Link to="/" className='nav-link' onClick={closeMobileMenu}>Home</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="/about"  className='nav-link' onClick={closeMobileMenu}>About</Link>    
        </li>  
        <li className='nav-item'>
        <Link to="/gallery"  className='nav-link' onClick={closeMobileMenu}>Gallery</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="/pricing"  className='nav-link' onClick={closeMobileMenu}>Pricing</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="/classes"  className='nav-link' onClick={closeMobileMenu}>Classes</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="/contacts"  className='nav-link' onClick={closeMobileMenu}>Contacts</Link>    
        </li>   
          </ul> 
            </div>
          <div className="login-nav">
<i className="fa-regular fa-user" />
<button>Log in</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Topnav;
