import React from 'react'
import "./about.css"
import HomeAdds from '../../home2';
import Footer from '../../footer';
function About() {
  return (
    <>
      <h1 className='aboutsection-text'>About us</h1>  
      <HomeAdds />
      <div className="aboutus-section">
    <div className="aboutus-container">
      <div className="aboutus-box">
        <img src='history.png' alt='target icon' className='icon-img'/>
    <h1>Our history</h1>
    <p>Founded in 1996, our gym has been decorated multiple times due to the hard work and passion given from our employees. In 2007 it was nominated the best gym in Portugal, since then we have won that award 4 times. </p>
      </div>
    <img src='deadlift.webp' alt='man doing a deadlift'className='about-imgs'/>
        <img src='winner.jpg' alt='Our best athelete' className='about-imgs'/>
    <div className="aboutus-box">
    <img src='target.png' alt='target icon' className='icon-img'/>
    <h1>Our Accomplishments</h1>
    <p>Several Big Body Gym athletes have participated in BodyBuilding competitions, Our most distinguished athlete is Rui Malheiro who has won multiple tournaments. </p>
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About