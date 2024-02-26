import React from 'react'
import "./home.css"
import API from './API'
import Market from './market'
import About from './about'
import Footer from './footer'

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="crypto-item">
      <div className="img-box">
        <img src="doge.png" alt="Dogecoin" />
      </div>
      <div className="crypto-text">
        <h2 className="text-6xl font-bold ">Start Investing<br /> <span>In Crypto</span> </h2>
        </div>
        <div className="img-box">
        <img src="Bitcoin.png" alt="Bitcoin" />
      </div>
      </div>
       <API/>
    </div>
    <Market/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home