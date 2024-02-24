import {React,useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./productdetails.css"
import TrendingProducts from './trending';
import Footer from './footer';
import { products } from './utils';


const ProductDetails = ({addToCart, removeFromCart,totalPrice,setTotalPrice,count, setCount}) =>{
    const { productId } = useParams();
    const product = products.find((p) => p.id === parseInt(productId));

    useEffect(() => {
        setTotalPrice(count * parseInt(product.price));
      }, [product, count]);

      useEffect(() => {
        setCount(1);
      }, [productId]);

    const addCount = () =>{
        setCount(count+1);
        setTotalPrice(((count + 1) * (product.price)))
    }

    const removeCount = () =>{
        const newCount = count -1 >= 0 ? count - 1 : 0;
        setCount(newCount);
        setTotalPrice((newCount * (product.price)))
        removeFromCart(product.id,count);
     
    }

    const handleAddToCart = () =>{
      const cartItem = {
        id:product.id,
        name:product.name,
        quantity:count,
        totalPrice: totalPrice,
        img: product.img,
      };
      addToCart(cartItem);
    }

    return (
        <>
        <h1 className='product-name'>{product.name}</h1>
      <div className='item-box'>
        <img src={`/products/${product.img}` }alt={product.name} />
        <div className="item-detail">
        <p>{product.description}</p>
        <div className="quantity-box">
            <h3>Quantity</h3>
            <div className="quantity-btns">
                <button onClick={removeCount}>-</button>
                <button>{count}</button>
                <button onClick={addCount}>+</button>
            </div>
        <h3>{totalPrice}€</h3>
        </div>
        <div className="cart-btns">
            <button className='buy-btn'>Buy now</button>
            <button className='add-btn' onClick={handleAddToCart}>Add to cart</button>
        </div>
        </div>
      </div>
      <TrendingProducts/>
      <Footer/>
      </>
)
}


export default ProductDetails