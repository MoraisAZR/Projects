import React,{useState, useEffect} from 'react'
import "./trending.css"
import { Link } from 'react-router-dom';
import {products} from "./utils"

const TrendingProducts = () =>{
  const [startIndex,setStartIndex] = useState(0);
  const [itemLimit, setItemLimit] = useState(4);
  const totalItems = 8;
  const visibleItems = products.slice(startIndex , startIndex + itemLimit);

  const handleClick = () =>{
    const nextIndex = startIndex + 1;
    if(nextIndex < totalItems){
        setStartIndex(nextIndex);
    }
  }
  
  const handlePrevClick = () =>{
    const prevIndex = startIndex - 1;
    if(prevIndex >= 0){
        setStartIndex(prevIndex);
    }
  }

  const updateLimit = () =>{
    if(window.innerWidth<= 500){
      setItemLimit(3)
    }else{
      setItemLimit(4)
    }
  }

  useEffect(() => {
    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => {
      window.removeEventListener('resize', updateLimit);
    };
  }, []);
  
    const ProductCard = ({ product }) => (
        <div className="trending-card">
          <Link to={`/product/${product.id}`}>
            <img src={`/products/${product.img}`} alt={product.name} />
            <div className="trending-details">
              <h2>{product.name}</h2>
              <p>{product.price}€</p>
            </div>
          </Link>
        </div> 
    )

    return(
        <>
        <div className="trending">
            <div className="title-container">
        <h1>Trending</h1>
        <div className="handle-btns">
            <button onClick={handlePrevClick}disabled={startIndex === 0}> <i className="fa-solid fa-arrow-left" /></button>
            <button onClick={handleClick} disabled={startIndex + itemLimit >= products.length}> <i className="fa-solid fa-arrow-right" /></button>
            </div>
        </div>
        <div className="trending-container">
        {visibleItems.map((product,index) => (      
            <ProductCard key={index} product={product} />
        ))}
        </div>
        </div>
        </>
    )}
export default TrendingProducts