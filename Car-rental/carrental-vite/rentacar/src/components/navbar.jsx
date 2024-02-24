import React, {useState}  from 'react'
import {Link} from "react-scroll";
import "./navbar.css"
import { useEffect } from "react";




function Navbar() {
  
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
    <div>
      <div className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='logo'>
            <h1> OrangeCar <i className="fa-solid fa-car"/></h1>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
          <ul className={click ? "nav-menu active " : "nav-menu"}>
        <li className='nav-item'>
        <Link to="/" className='nav-link'>Home</Link>    
        </li>    
        <li className='nav-item'>
        <Link to="customer" spy={true} smooth={true} offset={0} duration={500} className='nav-link' onClick={closeMobileMenu}>Services</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="fleet" spy={true} smooth={true} offset={-50} duration={500} className='nav-link' onClick={closeMobileMenu}>Fleet</Link>    
        </li>  
        <li className='nav-item'>
        <Link to="reviews" spy={true} smooth={true} offset={0} duration={500} className='nav-link' onClick={closeMobileMenu}>Testemonials</Link>    
        </li>   
        <li className='nav-item'>
        <Link to="testemonials" spy={true} smooth={true} offset={0} duration={500} className='nav-link' onClick={closeMobileMenu}>FAQ</Link>   
        </li>   
        <li className='nav-item'>
        <Link to="contacts" spy={true} smooth={true} offset={0} duration={500} className='nav-link' onClick={closeMobileMenu}>Contacts</Link>    
        </li>   
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
