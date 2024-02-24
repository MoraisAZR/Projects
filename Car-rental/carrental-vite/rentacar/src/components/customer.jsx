import React from 'react'
import "./customer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faInfinity, faPhone, faCarBurst } from '@fortawesome/free-solid-svg-icons';


function Customer() {
  return (
   <>
   <div id='customer'>
      <h1 className='Title'> Customer Service</h1>
    <div className='text-box-container'>
      <div className='text-box'>
      <h2><FontAwesomeIcon icon={faTag}/> Special holidays discounts!</h2>
      <p>We know that most people like to travel during special holidays like Christmas, so if you book with our website you will get 15% discount on every car you book during the holidays!</p>
      </div>
      <div className='text-box'>
      <h2> <FontAwesomeIcon icon={faInfinity} />Unlimited miles!</h2>
      <p>If you book with us you don't have to worry about how many miles you do! Our cars are perfect to use on long road trips across the country, from the beautiful Portuguese seaside to our beautiful mountains!</p>
      </div> 
      <div className='text-box'>
      <h2><FontAwesomeIcon icon={faPhone} /> Flexible reservations!</h2>
      <p>If you wish to book with our services you can do it by many ways! You can call us at 999-100-200, you can contact us through Whatsapp, Instagram at @OrangeCar and even by email! </p>
      </div>
      <div className='text-box'>
      <h2><FontAwesomeIcon icon={faCarBurst} /> 50% Insurance on us!</h2>
      <p> If by any chance you damage our vehicle we will cover 50% of the damage, this way you don't have to worry too much about the car and you can actually enjoy your holidays!</p>
      </div>
        </div>
        </div>
    </>
  )
}

export default Customer
