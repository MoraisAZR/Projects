import React from 'react'
import "./home-products.css"
import { Link } from 'react-router-dom'
import { products } from "./utils"

const HomeProducts = () =>{
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

            const productsDisplayed = products.slice(0,6);

    return(
        <>
        <div className="products">
        <h1>Our favorites products</h1>
        <div className="products-container">
        {productsDisplayed.map((product,index) => (      
            <ProductCard key={index} product={product} />
        ))}
        </div>
        </div>
        </>
    )
}


export default HomeProducts;