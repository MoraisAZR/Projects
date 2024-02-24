import React from 'react'
import "./footer.css"

function Footer() {
  return (
  <div className='footer-container' id='contacts'>
    <div className='footer-wrapper'>
    <div className='Orange-car'>
        <h3>Orange Car</h3>
        <p className='company-text'>We offer a big range of vehicles for all your driving needs, from simple trips within the city to exploring the whole country on a roadTrip.</p>
        <div className='contacts'>
        <p><i className="fa-solid fa-phone"/> 999-100-200</p>
        <p><i className="fa-solid fa-envelope"/>orangecar@gmail.com</p>
        </div>
    </div>
    <div className='company'>
        <h3>Company</h3>
        <p>Job opportunities</p>
        <p>Blog</p>
        <p>How we work</p>
    </div>
    <div className='working-hours'>
        <h3>Working hours</h3>
        <p>Monday - Friday: 9:00AM - 9:00PM</p>
        <p>Saturday: 10:00AM - 8:00PM</p>
        <p>Sunday: 8:00 AM - 1:00PM</p>
    </div>
    <div className='subscription'>
        <h3 className='footer-subscription-heading'>Subscription</h3>
        <p className='subscription-text'>Subscribe in order to get good deals, special upgrades, holidays discounts and much more...</p>
        <div className='input-areas'>
            <form>
                <input type='email' name='email' placeholder='Your email' className='footer-input' />
                <button>Subscribe</button>
            </form>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Footer
