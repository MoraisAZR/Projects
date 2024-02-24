import React, { useState } from 'react';
import "./faq.css";



const Dropdown = ({ buttonText, message }) => {
  const [isOpen, setIsOpen] = useState(false);



  const activateDrop = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown-container">
      <button className={`dropdown-button ${isOpen ? 'active-button' : ''}`} onClick={activateDrop}>{buttonText}<i className="fa-solid fa-angle-down down-icon"/></button>
      {isOpen && (
        <div className="dropdown-content">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

const Drop = () => {
  return (
    <>
    <div className='FAQ-text' id='testemonials'>
    <h2>FAQ</h2>
    <h1>Frequently Asked Questions</h1>
    <p>Frequent questions about the car renting process in our Website. Answers to common questions and concerns. </p>
    </div>
    <div className="dropdown">
      <Dropdown buttonText="1. How do I get a better car price?" message="By booking in advance. If you book your car in advance chances are that the car will cost you 25% less than a car booked a week before. The secret to low prices is booking in advanced. " />
      <Dropdown buttonText="2. How do I find the best deals?" message="You can find the best deals by researching and comparing cars from different companies/websites, you should take your time to research if your budget is tight and you don't want to spend too much on transport within the city." />
      <Dropdown buttonText="3. Why should we book with OrangeCar?" message="As mentioned before, if you decide to book with us you will have a few perks, such as special holidays discounts, unlimited miles and much more!" />
    </div>
    </>
  );
};

export default Drop;
