import React from 'react'
import "./pricingpg.css"
import Pricing from '../../pricing'
import Footer from '../../footer'

function pricingpg() {
  return (
    <>
    <div className="pricingpg-section">
        <h1>Our prices</h1>
        <p>Check out our programs and choose the one that suits you the most. If you are not sure what to choose you can always contact us and we'll find out together what might suit you better considering your schedule and the amount of time you have for the gym.</p>
    </div>
        <Pricing/>
        <Footer/>
    </>
  )
}

export default pricingpg