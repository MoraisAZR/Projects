import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <div className="footer-section">
        <div className="footer-container">
            <div className="bbg-section">
                <img src='gymicon.png' alt='big body gym logo' className='footer-logo'/>
                <p>Take your body to another level with the help of our programs.</p>
                <div className="footer-socials">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-youtube" />
                </div>
            <h3>Privacy Policy | @2024 BigBodyGym</h3>
            </div>
            <div className="footer-classes">
                <h3>Our classes</h3>
                <p>Cycling classes</p>
                <p>Yoga classes</p>
                <p>Jiu-jistu classes</p>
                <p>Powerlifting classes</p>
                <p>Fullbody classes</p>
            </div>
            <div className="working-hours">
                <h3>Working hours</h3>
                <p><span>Monday-Friday</span></p>
                <p>06:30AM - 23:00PM</p>
                <p><span>Saturdays</span></p>
                <p>07:30AM - 21:00PM</p>
                <p><span>Sunday</span></p>
                <p>07:30AM - 13:00PM</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer