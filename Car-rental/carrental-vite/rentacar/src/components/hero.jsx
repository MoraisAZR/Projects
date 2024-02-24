import React from 'react'
import "./hero.css";
import CarDisplay from './cardisplay';

function Hero() {
  return (
    <div>
        <div className="hero">
        <div className='Hero-container' id='home'>
            <div className='checkin-box'>
              <div className='box-elements'>
                <div className='location-pick'>
              <label className="airport-pickup"><i className="fa-solid fa-location-dot"/>Pick-up: </label><br/>
<select name="location" id="location" defaultValue={"DEFAULT"} >
<option value="DEFAULT" disabled hidden>Pick a location</option>
    <option>Porto Airport  </option>
    <option>Lisbon Airport </option>
    <option>Faro Airport </option>
    <option>Beja Airport </option>
    <option>Madeira Airport </option>
    <option>Porto Santo Airport </option>
    <option>Terceira Airport </option>
    <option>São Miguel Airport </option>
    <option>Pico Airport </option>
    <option>Faial Airport </option>
</select><br/>
</div>



   <div className='Pickup-date'>       
<label> <i className="fa-regular fa-calendar-days" id="first-calendar"/> Pick-up:</label><br/>
<input type="date"/>
<select id="hora-levant" >
    <option>00:00 AM </option>
    <option>00:30 AM </option>
    <option>01:00 AM</option>
    <option>05:30 AM</option>
    <option>06:00 AM</option>
    <option>06:30 AM</option>
    <option>07:00 AM</option>
    <option>07:30 AM</option>
    <option>08:00 AM</option>
    <option>08:30 AM</option>
    <option>09:00 AM</option>
    <option>09:30 AM</option>
    <option>10:00 AM</option>
    <option>10:30 AM</option>
    <option>11:00 AM</option>
    <option>11:30 AM</option>
    <option>12:00 PM </option>
    <option>12:30 PM</option>
    <option>13:00 PM</option>
    <option>13:30 PM</option>
    <option>14:00 PM</option>
    <option>14:30 PM</option>
    <option>15:00 PM</option>
    <option>15:30 PM</option>
    <option>16:00 PM</option>
    <option>16:30 PM</option>
    <option>17:00 PM</option>
    <option>17:30 PM</option>
    <option>18:00 PM</option>
    <option>18:30 PM</option>
    <option>19:00 PM</option>
    <option>19:30 PM</option>
    <option>20:00 PM</option>
    <option>20:30 PM</option>
    <option>21:00 PM</option>
    <option>21:30 PM</option>
    <option>22:00 PM</option>
    <option>22:30 PM</option>
    <option>23:00 PM</option>
    <option>23:30 PM</option>
    </select><br/>
    </div>  


    <div className='Pickup-container'>       
<label> <i className="fa-regular fa-calendar-days"/> Drop-off:</label><br/>
<input type="date"/>
<select id="hora-levant">
<option>00:00 AM </option>
    <option>00:30 AM </option>
    <option>01:00 AM</option>
    <option>05:30 AM</option>
    <option>06:00 AM</option>
    <option>06:30 AM</option>
    <option>07:00 AM</option>
    <option>07:30 AM</option>
    <option>08:00 AM</option>
    <option>08:30 AM</option>
    <option>09:00 AM</option>
    <option>09:30 AM</option>
    <option>10:00 AM</option>
    <option>10:30 AM</option>
    <option>11:00 AM</option>
    <option>11:30 AM</option>
    <option>12:00 PM </option>
    <option>12:30 PM</option>
    <option>13:00 PM</option>
    <option>13:30 PM</option>
    <option>14:00 PM</option>
    <option>14:30 PM</option>
    <option>15:00 PM</option>
    <option>15:30 PM</option>
    <option>16:00 PM</option>
    <option>16:30 PM</option>
    <option>17:00 PM</option>
    <option>17:30 PM</option>
    <option>18:00 PM</option>
    <option>18:30 PM</option>
    <option>19:00 PM</option>
    <option>19:30 PM</option>
    <option>20:00 PM</option>
    <option>20:30 PM</option>
    <option>21:00 PM</option>
    <option>21:30 PM</option>
    <option>22:00 PM</option>
    <option>22:30 PM</option>
    <option>23:00 PM</option>
    <option>23:30 PM</option>
    </select><br/>
    </div>  

<div className='fleet-container'>
    <label>Fleet:</label><br/>
    <select name="frota"  defaultValue="">
        <option>Volkswagen Golf</option>
        <option>Audi A1</option>
        <option>Renault Clio</option>
        <option>Mercedes-Benz GLK</option>
        <option>Mini Hatch</option>
        <option>Skoda Fabia</option>
        <option>Kia Picanto</option>
    </select><br/>
    </div>


<button className='search'>Continue Car Reservation</button>    
    </div>            
            </div>    
                <CarDisplay/>
                </div>  
            </div>
            </div>
  )
}

export default Hero

