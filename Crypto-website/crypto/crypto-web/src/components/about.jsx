import React from 'react'
import "./about.css"

function About() {
  return (
    <>
  <div className="about-section">
    <h1>About us</h1>
    <div className="about-container">
    <div className="about-boxes">
            <div className="info-box">
                <i className="fa-solid fa-user" />
                <div className="info-text">
                    <h3>User-Friendly Interface</h3>
                    <p>Our crypto website boasts an intuitive and user-friendly interface, making it easy for both beginners and seasoned investors to navigate the platform effortlessly.</p>
                </div>
            </div>
            <div className="info-box">
                <i className="fa-solid fa-shield-halved"/>
                <div className="info-text">
                    <h3>Advanced Security Measures</h3>
                    <p>Our platform employs cutting-edge encryption technology and multi-factor authentication to ensure that your funds and personal information are safeguarded against unauthorized access.</p>
                </div>
            </div>
            <div className="info-box">
                <i className="fa-solid fa-wallet" />
                <div className="info-text">
                    <h3>Low Transaction Fees</h3>
                    <p>Our platform offers competitive and transparent transaction fees, ensuring that users retain a higher percentage of their profits.</p>
                </div>
            </div>
        </div>
        
        <div className="about-boxes">
            <div className="info-box">
<i className="fa-solid fa-phone" />
                <div className="info-text">
                    <h3>Responsive Customer Support</h3>
                    <p>Our dedicated customer support team is committed to providing timely and effective assistance.</p>
                </div>
            </div>
            <div className="info-box">
            <i className="fa-solid fa-wrench" />
                <div className="info-text">
                    <h3>Innovative Trading Tools</h3>
                    <p>Gain a competitive edge in the crypto market with our suite of innovative trading tools.</p>
                </div>
            </div>
            <div className="info-box">
            <i className="fa-solid fa-bolt-lightning" />
                <div className="info-text">
                    <h3>Quick Transactions</h3>
                    <p>With our website, you can sell or trade your crypto at light speed.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
    </>
  )
}

export default About



        
