import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./API.css"

            const apiKey = 'b9f83c0b-2f1b-4023-8b43-e88f4568977b';
            
function API() {
    const [topCryptos, setTopCryptos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {

            const response = await axios.get(`https://api.coincap.io/v2/assets?limit=4&apiKey=${apiKey}`);
            setTopCryptos(response.data.data);
          } catch (error) {
            console.error('Error fetching crypto data:', error);
          }
        };
    
        fetchData();
      }, []);

      const percentageColor = (changePercent) =>{
        return changePercent >= 0 ? "#35de0b" : "red";
      }
    
      return (
        <div className='home-info'>
        {topCryptos.map((crypto) => (
          <div key={crypto.id} className="home-item">
            <img
              src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
              alt={`${crypto.name} icon`}
            />
            <p>{crypto.name} <span style={{color: percentageColor(crypto.changePercent24Hr)}}>{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</span>
            <br/>
            Price: ${parseFloat(crypto.priceUsd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
        ))}
      </div>
    );
    };

export default API