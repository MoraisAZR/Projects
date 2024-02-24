import React, { useState } from 'react'
import { Link} from 'react-scroll';
import "./topnav.css";

function Topnav() {
  const [menu, setMenu] = useState(false);

const activateMenu = () => setMenu(!menu);



  return (
    <>
    <div className="topnav-container">
        <div className="Title">
            <h1>CryptoVortex</h1>
        </div>
        <div className={`search-section ${menu ? 'active' : ''}`}>
        <Link to="home-container" spy={true} smooth={true} offset={-70} duration={500}>
            <h2>Home</h2>
            </Link>
            <Link to="information-container" spy={true} smooth={true} offset={-150} duration={500}>
            <h2>Market</h2>
            </Link>
            <Link to="about-container" spy={true} smooth={true} offset={-150} duration={500}>
            <h2>About</h2>
            </Link>
            <Link to="footer-container" spy={true} smooth={true} offset={10} duration={500}>
            <h2>Join</h2>
            </Link>
        </div>
        <div className="socials">
        <i className="fa-brands fa-twitter" />  
        <i className="fa-brands fa-discord" />
        </div>
        <div className="menu-icon" onClick={activateMenu}>
        <i class="fa-solid fa-bars" />
      </div>
    </div>
    </>
  )
}

export default Topnav