import React from 'react'
import "./classes.css"
import Footer from '../../footer';
function classes() {
  return (
    <>
    <div className="class-section">
        <h1>Our classes</h1>
        <div className="class-container">
            <div className="class-box">
                <div className="image-container">
                <img src='classes/class1.png' alt='PowerLift class'/>
                <div className="class-infor">
                <h3>Power Lifting</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />Mr Muscles</p>
                <p><i className="fa-regular fa-clock" /> Mon. 10:00AM</p>
                </div>
                </div>
                </div>
            </div>
            <div className="class-box">
            <div className="image-container">
                <img src='classes/class2.jpg' alt='Jiujistu class'/>
                <div className="class-infor">
                <h3>Jiujistu</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />John Man</p>
                <p><i className="fa-regular fa-clock" /> Tue. 18:00PM</p>
                </div>
                </div>
                </div>
            </div>
            <div className="class-box">
            <div className="image-container">
                <img src='classes/class3.jpg' alt='Cycling class'/>
                <div className="class-infor">
                <h3>Cycling</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />Clara</p>
                <p><i className="fa-regular fa-clock" /> Wed. 11:00AM</p>
                </div>
                </div>
                </div>
            </div>
            <div className="class-box">
            <div className="image-container">
                <img src='classes/class4.jpeg' alt='Yoga class'/>
                <div className="class-infor">
                <h3>Yoga</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />Maria Feliz</p>
                <p><i className="fa-regular fa-clock" /> Thu. 9:00AM</p>
                </div>
                </div>
                </div>
            </div>
            <div className="class-box">
            <div className="image-container">
                <img src='classes/class5.jpg' alt='Crossfit class'/>
                <div className="class-infor">
                <h3>Crossfit</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />Mario Cartoski</p>
                <p><i className="fa-regular fa-clock" /> Fri 8:00AM</p>
                </div>
                </div>
                </div>
            </div>
            <div className="class-box">
            <div className="image-container">
                <img src='classes/class6.png' alt='Abs class'/>
                <div className="class-infor">
                <h3>Abs Workout</h3>
                <div className="class-p">
                <p><i className="fa-regular fa-user" />Clara</p>
                <p><i className="fa-regular fa-clock" /> Sat. 10:00AM</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default classes