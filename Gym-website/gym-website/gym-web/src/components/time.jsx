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
            <div className='schedule-box' id="cycling">
                <img src="cycling.png" alt="Cycling class" />
                <h2>Cycling</h2>
                <p>Monday : 10:00 AM - 11:00PM</p>
            </div>
            <div className="schedule-box">
            <img src="bjj.png" alt="Brazilian JiuJitsu class" />
                <h2>Jiu-jistu</h2>
                <p>Tuesday : 18:00 PM - 19:30PM</p>
            </div>
            <div className="schedule-box">
            <img src="power.png" alt="Powerlifting class" />
                <h2>Powerlifting</h2>
                <p>Wednesday : 17:00 PM - 18:00PM</p>
            </div>
            <div className="schedule-box">
            <img src="yoga.png" alt="Yoga class" />
                <h2>Yoga</h2>
                <p>Thursday : 19:00 PM - 20:00PM</p>
            </div>
            <div className="schedule-box">
            <img src="abs.png" alt="Abs class" />
                <h2>Abs workout</h2>
                <p>Friday : 10:00 AM - 11:00AM</p>
            </div>
            <div className='schedule-box' id="full">
            <img src="full.png" alt="Fullbody class" />
                <h2>Fullbody workout</h2>
                <p>Saturday : 09:00 AM - 10:00AM</p>
            </div>
        </div>
    </div>


   </>
  )
}

export default Time