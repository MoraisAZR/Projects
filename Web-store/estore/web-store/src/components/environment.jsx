import React from 'react'
import "./environment.css"
import { Link } from 'react-router-dom'

function Environment() {
  return (
    <>
    <div className="environment-container">
        <div className="environment-msg">
            <h2>Environmental struggle</h2>
            <p>Here at Azorean taking care of the environment is a priority. Each item you buy 20% of it's value goes to the Azorean Trees Association which is in charge of planting trees all over Portugal. Most of our products are also made of recycled objects rather than natural resources which helps protecting the enviroment a little more. </p>
            <Link to="/categories">
            <button>Shop now</button>
            </Link>
        </div>
        <div className="recycled-img">
        <img src="recycled.png" alt="Person planting tree" />
        </div>
    </div>
    </>
  )
}

export default Environment