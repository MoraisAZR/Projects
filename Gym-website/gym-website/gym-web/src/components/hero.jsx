import React from 'react'
import {Link} from "react-router-dom"
import "./hero.css"

function Hero() {
    return (
      <div className='hero'>
        <div className="hero-container">
          <div className="background-img" id='hero-scroll'>
            <img src='gym2.png' alt='gym guy' className='boximg' />
          </div>    
          <div className="side-text">
          <div className="hero-text">
            <div className="gym-text">
              <h1>Reach your potential</h1>
              <h2>Perfect your body</h2>
            </div>
           <Link to="/classes"> <button className='class-btn'>Our classes<i className="fa-solid fa-arrow-right"/></button> </Link>
          </div>
          <div className="social-icons">
            <h3 className='sideway-text'>Socials</h3>
            <h1>|</h1>
            <div className="icons">
            <i className="fa-brands fa-square-facebook" />
            <i className="fa-brands fa-instagram"/>    
            <i className="fa-brands fa-square-youtube"></i>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }

export default Hero;
