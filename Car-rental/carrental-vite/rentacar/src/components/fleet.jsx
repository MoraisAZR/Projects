import React from 'react'
import "./fleet.css"
import { useState } from 'react';
import { Link  } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { carsmodel } from "./carsmodels"


const Fleet = () =>{
    const [selectedCar, setSelectedCar] = useState(carsmodel[0]);
    const [startIndex, setStartIndex] = useState(0);
    const[carClicked, setCarClicked] = useState(null);


    const handleCarClick = (index,car) =>{
      setCarClicked(index);

      setSelectedCar(car);
    }


    const firstCars = carsmodel.slice(startIndex,startIndex+3);

    const upButtonClick = () =>{
        if(startIndex>0){
            setStartIndex(startIndex- 1);
        }
    }

    const downButtonClick = () =>{
        if(startIndex<carsmodel.length - 3){
            setStartIndex(startIndex + 1);
        }
    }


    return (
<>
      <div className='fleet-text' id='fleet'>Check out our fleet at your service!</div>
        <div className='container'>
          <div className='car-options'>
            <ul>
              {firstCars.map((car, index) => (
                <li key={index}>  <button className={`cars-buttons ${ carClicked === (index +startIndex)  ? 'selected' : ''}`} onClick={() =>handleCarClick(index+ startIndex,car)}> {car.name}</button>
                
                </li>
              ))}
            </ul>
                <div className='button-container'>
            <button onClick={upButtonClick} disabled={startIndex === 0}><FontAwesomeIcon icon={faAngleUp} /></button>
                 <button onClick={downButtonClick} disabled={startIndex === carsmodel.length - 3}><FontAwesomeIcon icon={faAngleDown}/></button>
                 </div>
          </div>
    
          {selectedCar && (
            <>
              <div className='car-image-container'>
                <img src={selectedCar.image} alt={selectedCar.name}/>
              </div>
    
              <div className='fleet-details'>
                <h2 className='price-high'>{selectedCar.price}€  <p>per day</p></h2>
                <p>Doors: {selectedCar.doors}</p><hr/>
                <p>Seats: {selectedCar.seats}</p><hr/>
                <p>Luggage: {selectedCar.luggage}</p><hr/>
                <p>Transmission: {selectedCar.Transmission}</p><hr/>
                <p>Air conditioner: {selectedCar.conditioning}</p><hr/>
                <p>Minimum age: {selectedCar.minage}</p>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} style={{ display: 'contents' }}>
                  <button className='reserve-btn'> Reserve now </button>
                  </Link>
              </div>
          </>
          )}
        </div>
        </>
      );
    }

export default Fleet;