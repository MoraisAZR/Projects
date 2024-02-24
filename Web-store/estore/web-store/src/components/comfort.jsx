import React from 'react';
import "./comfort.css";
import { Link } from 'react-router-dom';

function Comfort() {
  return (
    <>
    <div className="comfort-container">
        <div className="comfort-img">
        <img src="comforti.png" alt="Big cozy Shelf" />
        </div>
        <div className="comfort-msg">
            <h2>Elegant styling</h2>
            <p>Azorean products are designed by french designers in order to make our products usable while being stylish.</p>
            <Link to="/categories">
            <button>Shop now</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Comfort