import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
    <div className="footer-container">
      <div className="footer-item">
      <div className="img-box">
        <img src="doge.png" alt="Dogecoin" />
      </div>
      <div className="footer-text">
        <h2>Join our<br /> <span>Discord</span> </h2>
        </div>
        <div className="img-box">
        <img src="Bitcoin.png" alt="Bitcoin" />
      </div>
      </div>
      <button>Join the Discord</button>
      <div className="footer-socials">
      <i className="fa-brands fa-twitter"/>
      <i className="fa-brands fa-discord"/>
      <i className="fa-brands fa-youtube"/>
      </div>
    </div>
    </>
  )
}

export default Footer