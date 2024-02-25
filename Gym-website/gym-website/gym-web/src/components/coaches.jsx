import React from 'react'
import "./coaches.css"

function Coaches() {
  return (
    <>
    <div className="coaches-section">
      <div className="paint-effect">
      <img src='brush.png' className='time-effect' alt='Brush Image' />
      <div className='time-text'>
        <h3>Gym coaches</h3>
      </div>
    </div>
      <div className="coach-text">
        <h1>Our team of professionals</h1>
        <p>Our team of coaches will help you succeed any challenge you face. Guidance and motivation will be given to any client who's struggling.</p>
        </div>
        <div className="coaches-container">
          <div className="coach-profile">
      <div className="coach-image">
        <img src='coach1.png' alt='coach1' />
      </div>
      <div className="coach-details">
        <h3> John Man</h3>
        <p>Jiujistu coach</p>
        <div className="trainers-socials">
        <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="far fa-envelope" /> 
          </div>
      </div>
      </div>
          <div className="coach-profile">
      <div className="coach-image">
        <img src='coach2.png' alt='coach12' />
      </div>
      <div className="coach-details">
        <h3> Mario Cartoski</h3>
        <p>Crossfit trainer</p>
        <div className="trainers-socials">
        <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="far fa-envelope" /> 
          </div>
      </div>
      </div>
          <div className="coach-profile">
      <div className="coach-image">
        <img src='coach3.png' alt='coach3' />
      </div>
      <div className="coach-details">
        <h3> Maria Feliz</h3>
        <p>Yoga coach</p>
        <div className="trainers-socials">
        <i className="fab fa-facebook-f" />
      <i className="fab fa-instagram" />
      <i className="fab fa-twitter" />
      <i className="far fa-envelope" /> 
          </div>
      </div>
      </div>
        </div>
    </div>
    </>
  )
}

export default Coaches