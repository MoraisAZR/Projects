import React from 'react'
import "./home.css"
import HomeProducts from './home-products'
import Environment from './environment'
import TrendingProducts from './trending'
import Comfort from './comfort'
import Footer from './footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

    <div className="home">
        <div className="home-container">
        <div className="home-box">
        <Link to="/categories?category=LivingRoom">
                <div className="image-container">
                <img src='home.jpg' alt='Living room'/>
                <div className="box-infor">
                <h2>Living Room</h2>
                </div>
                </div></Link>
        </div>
        <div className="home-box">
        <Link to="/categories?category=Skincare">
                <div className="image-container">
                <img src='skincare.jpg' alt='Skincare'/>
                <div className="box-infor">
                <h2>Skincare</h2>
                </div>
                </div>
                </Link>
        </div>
        <div className="two-box">
        <Link to="/categories?category=Kitchen">
        <div className="home-box">
                <div className="image-container">
                <img src='kitchen.jpg' alt='Kitchen'/>
                <div className="box-infor">
                <h2>Kitchen</h2>
                </div>
                </div>
        </div>
        </Link>
        <div className="home-box">
        <Link to="/categories?category=Eletronics">
                <div className="image-container">
                <img src='eletronics.png' alt='Eletronics'/>
                <div className="box-infor">
                <h2>Eletronics</h2>
                </div>
                </div>
        </Link>
        </div>
        
        </div>
    </div> 
    </div>
    
    <HomeProducts/>
    <Environment/>
    <TrendingProducts/>
    <Comfort/>
    <Footer/>
    </>
  )
}

export default Home