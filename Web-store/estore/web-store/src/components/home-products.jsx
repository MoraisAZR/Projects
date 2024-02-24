import React from 'react'
import "./home-products.css"
import { Link } from 'react-router-dom'

const HomeProducts = () =>{
    const products = [
        {
            id:1,
            name:"Leather Chair",
            price:"500",
            img:"chair.png",
            category:"LivingRoom"
        },
       
        {
            id:2,
            name:"Wood Table",
            price:"200",
            img:"woodtable.png",
            category:"LivingRoom"
        },
       
        {
            id:3,
            name:"Modern Toaster",
            price:"50",
            img:"toaster.png",
            category:"Kitchen"
        },
       
        {
            id:4,
            name:"Floor Lamp",
            price:"129",
            img:"lamp.png",
            category:"LivingRoom"
        },
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
        }
    ];

  

    const ProductCard = ({ product }) => (
      <div className="products-card">
        <Link to={`/product/${product.id}`}>
        <img src={`/products/${product.img}` }alt={product.name} />
        <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.price}€</p>
        </div>
        </Link>
      </div>  
    )

    return(
        <>
        <div className="products">
        <h1>Our favorites products</h1>
        <div className="products-container">
        {products.map((product,index) => (      
            <ProductCard key={index} product={product} />
        ))}
        </div>
        </div>
        </>
    )
}


export default HomeProducts;