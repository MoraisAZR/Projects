import React from 'react'
import "./contact.css"
import Footer from "../../footer"

function Contact() {
  return (
    <>
    <div className="contacts-section">
        <div className="contacts-container">
    <h1>Don't be ashamed to ask for help! We're here to help you!</h1>
    <p>At BigBodyGym we believe that communication is key to success. Our team dedicates themselves 24/7 in order for you to achieve your dream body, with the help of our nutricionist and fitness coaches we will help you reach your fitness goals.</p>
    <div className="contact-infor">
        <div className="address">
        <h3>Madeira, Portugal</h3>
        <p>Av. do Infante, 9004-513 Funchal</p>
        </div>
        <div className="opening-hours">
            <h3>Opening Hours</h3>
            <p>Mon to Fri 8:30 AM - 20:00 PM</p>
        </div>
        <div className="contacts">
            <h3>Contacts</h3>
            <p>+351 920 555 122 </p>
            <p> BigBodyGym@gmail.pt</p>
        </div>
    </div>
        </div>
        <div className="feedback-container">
        <h1>Give us some feedback!</h1>
        <input type='text' placeholder='Name' required className='feedback-input' />
        <input type='text' placeholder='Email' required className='feedback-input' />
        <input type='text' placeholder='Very nice gym...' required className='feedback-box' />
        <button>Submit</button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact