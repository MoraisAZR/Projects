import React from 'react'
import "./time.css"

function Time() {
  return (
   <>
        <div className="paint-effect">
      <img src='brush.png' className='time-effect' alt='Brush Image' />
      <div className='time-text'>
        <h3>Schedule</h3>
      </div>
    </div>
    <div className="time-container">
        <div className="time-boxes">
            <div className="cycling">
                <h2>Cycling</h2>
                <p>Monday : 10:00 AM - 11:00PM</p>
            </div>
            <div className="jiujitsu">
                <h2>Jiu-jistu</h2>
                <p>Tuesday : 18:00 PM - 19:30PM</p>
            </div>
            <div className="power">
                <h2>Powerlifting</h2>
                <p>Wednesday : 17:00 PM - 18:00PM</p>
            </div>
            <div className="yoga">
                <h2>Yoga</h2>
                <p>Thursday : 19:00 PM - 20:00PM</p>
            </div>
            <div className="abs">
                <h2>Abs workout</h2>
                <p>Friday : 10:00 AM - 11:00AM</p>
            </div>
            <div className="full">
                <h2>Fullbody workout</h2>
                <p>Saturday : 09:00 AM - 10:00AM</p>
            </div>
        </div>
    </div>


   </>
  )
}

export default Time