import React, { useState, useEffect } from 'react';
import "./cardisplay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';



const CarDisplay = () => {
    const cars = [
        {
            name:"Audi A1",
            image:"/images/audia1.png",
            price:"24€"
        },
        {
            name:"Renault Clio",
            image:"/images/renault.png",
            price:"18€"
        },
        {
            name:"Volkswagen Golf",
            image:"/images/golf.png",
            price:"12€"
        }
    ];


    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const [currentImageOpacity, setCurrentImageOpacity] = useState(1);

    const goToNextCar = () => {
        setCurrentImageOpacity(0); 
        setTimeout(() => {
          setCurrentCarIndex(prevIndex => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
          setCurrentImageOpacity(1); 
        }, 300); 
      };
    


    const prevCar = () =>{
        setCurrentCarIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
    }

    const nextCar = () => {
        setCurrentCarIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0: prevIndex+1))
    }

    const currentCar = cars[currentCarIndex];


    useEffect(() => {
        const intervalId = setInterval(goToNextCar, 10000); 
    
        return () => {
          clearInterval(intervalId); 
        };
      }, []); 

    

    return(
        <div className='cars-display'>
            <div className='car-details'>
                <h1 className='promo-text'>Our best deals!</h1>
                <h1 className='car-name'> 
                    {currentCar.name} for just {currentCar.price}/day!
                </h1>
                <img src={currentCar.image} alt={currentCar.name} className='car-img' style={{ opacity: currentImageOpacity }} />
                
            </div>
            <div className='controls'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={prevCar} />
        <FontAwesomeIcon icon={faArrowRight} onClick={nextCar} />
            </div>
        </div>
    );
};

export default CarDisplay;