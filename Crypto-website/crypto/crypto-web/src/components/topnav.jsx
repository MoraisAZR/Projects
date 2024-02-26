import React, {useState, useEffect} from 'react'
import { Link} from 'react-scroll';
import "./topnav.css";

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
              <h1 className='logo-text'>CryptoVortex</h1>      
              </div>  
              <div className="topnav-items">
              <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}/>
              </div>
                <ul className={click ? "nav-menu active " : "nav-menu"}>   
          <li className='nav-item'>
          <Link to="home-container" spy={true} smooth={true} offset={-100} duration={500} className='nav-link' onClick={closeMobileMenu}>Home</Link>    
          </li>   
          <li className='nav-item'>
          <Link to="information-container" spy={true} smooth={true} offset={-155} duration={500}  className='nav-link' onClick={closeMobileMenu}>Market</Link>    
          </li>  
          <li className='nav-item'>
          <Link to="about-container" spy={true} smooth={true} offset={-160} duration={500}  className='nav-link' onClick={closeMobileMenu}>About</Link>    
          </li>   
          <li className='nav-item'>
          <Link to="footer-container" spy={true} smooth={true} offset={-20} duration={500}  className='nav-link' onClick={closeMobileMenu}>Join</Link>    
          </li>   
            </ul> 
              </div>
            </div>
          </div>
      </>
    )
  }
  

export default Topnav