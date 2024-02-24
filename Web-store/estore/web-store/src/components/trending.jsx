import React,{useState} from 'react'
import "./trending.css"
import { Link } from 'react-router-dom';

const TrendingProducts = () =>{
    const Trending = [
        {
            id:5,
            name:"Body oil",
            price:"35",
            img:"oil.png",
            category:"Skincare"
        },
        {
            id:6,
            name:"Wood Shelf",
            price:"520",
            img:"shelf.png",
            category:"LivingRoom"
        },
        {
            id:7,
            name:"Soft Chair",
            price:"199",
            img:"chairtr.png",
            category:"LivingRoom"
        },
        {
            id:8,
            name:"Modern Shelf",
            price:"109",
            img:"shelftr.png",
            category:"LivingRoom"
        },
        {
            id:9,
            name:"Golden Lamp",
            price:"99",
            img:"lamp2tr.png",
            category:"LivingRoom"
        },
        {
            id:10,
            name:"Modern Vase",
            price:"25",
            img:"vasetr.png",
            category:"LivingRoom"
        },
        {
            id:11,
            name:"Picasso Styled Lamp",
            price:"50",
            img:"lamptr.png",
            category:"LivingRoom"
        },
        {
            id:12,
            name:"Hidration Gel",
            price:"20",
            img:"hidrationtr.png",
            category:"Skincare"
        }
    ];

  const [startIndex,setStartIndex] = useState(0);
  const itemLimit = 4;
  const visibleItems = Trending.slice(startIndex , startIndex + itemLimit);




  const handleClick = () =>{
    const nextIndex = startIndex + 1;
    if(nextIndex < Trending.length){
        setStartIndex(nextIndex);
    }
  }
  
  const handlePrevClick = () =>{
    const prevIndex = startIndex - 1;
    if(prevIndex >= 0){
        setStartIndex(prevIndex);
    }
  }
  
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
            <button onClick={handleClick} disabled={startIndex + itemLimit >= Trending.length}> <i className="fa-solid fa-arrow-right" /></button>
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