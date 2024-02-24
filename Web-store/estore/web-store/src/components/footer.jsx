import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-container">
            <div className="news-letter">
            <h2>Newsletter</h2>
            <div className="input-container">
            <input type='email' name='email' placeholder='Your email' className='footer-input' />
            <button>Subscribe</button>
            </div>
    </div>
    <div className="information">
        <p>Location</p>
        <p>About</p>
        <p>FAQs</p>
        <p>Contacts</p>
    </div>
        </div>
    </div>
    </>
  )
}

export default Footer