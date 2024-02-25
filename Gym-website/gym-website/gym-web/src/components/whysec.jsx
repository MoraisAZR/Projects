import React from 'react'
import {Link} from "react-router-dom"
import "./whysec.css"

function Whysection() {
  return (
    <>
    <div className="why-section">
        <div className="why-container">
            <div className="bodybuilder-img">
                <img src='big.jpg' alt='big guy working out' />
            </div>
            <div className="why-text-cont">
            <div className="paint-effect">
      <img src='brush.png' className='why-effect' alt='Brush Image' />
      <div className='time-text'>
        <h3>Why choose Us?</h3>
      </div>
    </div>
            <div className="why-text">
                <h1>We can give you your dream body!</h1>
                <p>Our professionals work hard to make sure your experience at our gym is good enough to make you return every day. With that being said, we make sure that our clients don't have to worry too much about equipment, at our gym you can get the following perks:</p>
                <div className="gym-perks">
                <div className="gym-element">
                    <img src='bottle.png' alt='water'/>
                    <h3>Free water bottles</h3>
                    </div>    
                <div className="gym-element">
                    <img src='towel.png' alt='towel'/>
                    <h3>Free towels</h3>
                    </div>    
                <div className="gym-element">
                    <img src='karate.png' alt='karate'/>
                    <h3>Free fitness training</h3>
                    </div>    
                </div>
              <Link to="/classes"> <button className='why-btn'>See classes<i className="fa-solid fa-arrow-right"/></button></Link>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Whysection