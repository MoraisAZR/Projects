import React from 'react'
import {Link} from "react-router-dom"
import "./home2.css"

function HomeAdds() {
  return (
    <>
    <div className='home2-container'>
    <div className="who-section">
        <div className="who-container">
            <div className="who-text">
            <div className="paint-effect">
      <img src='brush.png' className='brush-effect' alt='Brush Image' />
      <div className='centered-text'>
        <h3>Who we are</h3>
      </div>
    </div>
                <h1>Push yourself to another level</h1>
                <p>Take your body and mental strength to the next level with the help of our professionals ready to help you at any time.</p>
            </div>
            <div className="who-boxes">
            <div className="box">
                <img src='trainer.png' alt='professional trainer' />
                <h3>Professional Trainers</h3>
            </div>
            <div className="box">
                <img src='fancy.png' alt='Unique machines' />
                <h3>Unique Machines</h3>
            </div>
            <div className="box">
                <img src='equipment.png' alt='Modern Equipment' />
                <h3>Modern Equipment</h3>
            </div>
            </div>
           <Link to="/classes"> <button className="home2-btn">Explore more<i className="fa-solid fa-arrow-right"/></button></Link>
        </div>
    </div>
    <div className='strech-img'>
        <img src='strech1.png' alt='strech'/>
    </div>
    </div>
    
    </>
  )
}

export default HomeAdds