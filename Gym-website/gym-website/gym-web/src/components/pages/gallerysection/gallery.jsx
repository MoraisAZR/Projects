import React from 'react'
import "./gallery.css"
import Footer from '../../footer';

function Gallery() {
  return (
    <>
    <div className="gallery-section">
      <h1>Gallery</h1>
      <p>Check out a few pictures from our workplace!</p>
      <div className="gallery-container">
        <img src='gallery/gym1.jpg' alt='Person working out' />
        <img src='gallery/gym2.jpg' alt='Person working out' />
        <img src='gallery/gym3.jpg' alt='Person working out' />
        <img src='big.jpg' alt='Person working out' />
        <img src='abs.jpg' alt='Person working out' />
        <img src='power.png' alt='Person working out' />
        <img src='gallery/gym7.jpg' alt='Person working out' />
        <img src='gallery/gym8.jpg' alt='Person working out' />
        <img src='gallery/gym9.jpg' alt='Person working out' />
      </div>
    </div>
<Footer/>
  
  
  </>
  )
}

export default Gallery