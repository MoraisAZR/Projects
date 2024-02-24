import React from 'react'
import "./pricing.css"

function Pricing() {
  return (
    <>
    <div className="price-section">
    <div className="paint-effect">
      <img src='brush.png' className='time-effect' alt='Brush Image' />
      <div className='time-text'>
        <h3>Pricing</h3>
      </div>
    </div>
        <div className="price-container">
            <div className="price-box">
                <img src='price3-image.avif' alt='price image'/>
                <div className="price-info">
                    <h2>Beginner</h2>
                    <h1> <span>25</span>€ p/m</h1>
                    <p>Free personnal trainer</p>
                    <p>Free nutrition plan</p>
                    <p>24h access to the gym</p>
                    <p>Free towels</p>
                    <p>Free water</p>
                <button className='price-button'>Purchase now<i className="fa-solid fa-arrow-right"/></button>
                </div>
            </div>
            <div className="price-box">
                <img src='price2-img.avif' alt='price image'/>
                <div className="price-info">
                    <h2>Classes</h2>
                    <h1> <span>45</span>€ p/m</h1>
                    <p>Free protein bars</p>
                    <p>Free pre-workout</p>
                    <p>24h access to the gym</p>
                    <p>Free classes</p>
                    <p>All the previous perks</p>
                <button className='price-button'>Purchase now<i className="fa-solid fa-arrow-right"/></button>
                </div>
            </div>
            <div className="price-box">
                <img src='price1-img.avif' alt='price image'/>
                <div className="price-info">
                    <h2>Regular</h2>
                    <h1> <span>55</span>€ p/m</h1>
                    <p>Free Pre-workout </p>
                    <p>Free protein samples</p>
                    <p>24h access to the gym</p>
                    <p>Access to sauna</p>
                    <p>All the previous perks</p>
                <button className='price-button'>Purchase now<i className="fa-solid fa-arrow-right"/></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing