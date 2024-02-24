import React from 'react'
import "./fleet.css"
import { useState } from 'react';
import { Link  } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Fleet = () =>{
    const carsmodel = [
        {
            name:"Volkswagen Golf",
            price:"12",
            doors:"4",
            seats:"5",
            luggage:"2 Suitcases/2 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"21 years",
            image:"/images/golf.png"
        },
        {
            name:"Audi A1",
            price:"24",
            doors:"4",
            seats:"5",
            luggage:"2 Suitcases/2 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"25 years",
            image:"/images/audia1.png"
        },
        {
            name:"Renault Clio",
            price:"18",
            doors:"4",
            seats:"5",
            luggage:"2 Suitcases/2 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"21 years",
            image:"/images/renault.png"
        },
        {
            name:"Mercedes-Benz GLK",
            price:"30",
            doors:"4",
            seats:"5",
            luggage:"3 Suitcases/3 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"25 years",
            image:"/images/mercedes.png"
        },
        {
            name:"Mini Hatch",
            price:"10",
            doors:"4",
            seats:"5",
            luggage:"1 Suitcases/1 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"18 years",
            image:"/images/mini1.png"
        },
        {
            name:"Skoda Fabia",
            price:"20",
            doors:"4",
            seats:"5",
            luggage:"2 Suitcases/2 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"21 years",
            image:"/images/skoda1.png"
        },
        {
            name:"Kia Picanto",
            price:"12",
            doors:"4",
            seats:"5",
            luggage:"2 Suitcases/2 bags",
            Transmission:"Manual",
            conditioning:"Yes",
            minage:"18 years",
            image:"/images/kia.png"
        },
    ];

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
                  <button className='reserve-btn'>
                <FontAwesomeIcon icon={faCalendarDays} /> Reserve now
                </button>
                  </Link>
              </div>
          </>
          )}
        </div>
        </>
      );
    }

export default Fleet;