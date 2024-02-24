import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './market.css';


function Market(){
  const [marketData, setMarketData] = useState([]);
const [ currentPage, setCurrentPage] = useState(1);
const tokenLimit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'b9f83c0b-2f1b-4023-8b43-e88f4568977b';
        const response = await axios.get(`https://api.coincap.io/v2/assets?limit=50&apiKey=${apiKey}`);
        setMarketData(response.data.data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchData();
  }, []);

  const lastTokenI = currentPage * tokenLimit;
  const firstTokenI = lastTokenI - tokenLimit;
  const currentTokens = marketData.slice(firstTokenI, lastTokenI);

  const handlePage = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  const percentageColor = (changePercent) =>{
    return changePercent >= 0 ? "#35de0b" : "red";
  }

  return (
    <>
     <h1 className='market-title'>Market Update</h1>
      <table className="information-container">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {currentTokens.map((data) => (
            <tr key={data.id} className="information-display">
              <td>
                <div className="coin-box">
                <div className="coin-detail">
                  <img
                    src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}
                    alt={`${data.name} icon`}
                  />
                  <p>{data.name}</p>
                </div>
                </div>
              </td>
              <td>${parseFloat(data.priceUsd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              <td><span style={{color:percentageColor(data.changePercent24Hr)}}>{parseFloat(data.changePercent24Hr).toFixed(2)}%</span></td>
              <td>${parseFloat(data.marketCapUsd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page-select">
        {Array.from({ length: Math.ceil(marketData.length / tokenLimit) }).map((_, index) => (
          <button key={index +1} onClick={() => handlePage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Market