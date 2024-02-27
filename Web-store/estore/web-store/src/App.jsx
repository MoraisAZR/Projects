import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css'
import Topnav from './components/topnav';
import Home from './components/home';
import HomeProducts from './components/home-products';
import ProductDetails from './components/productdetails';
import TrendingProducts from './components/trending';
import ScrollToTop from './components/scrollup';
import { useState } from 'react';
import Categories from './components/pages/categories';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count,setCount] = useState(1);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + product.quantity, totalPrice: (item.quantity + product.quantity) * item.price } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  
    setItemCount(itemCount + product.quantity);
  };

  const removeFromCart = (itemId, quantity) =>{
    const newCount = itemCount - quantity;

    if(newCount>0){
      setCartItems((prevItems) => prevItems.map((item)=> item.id !==itemId ? {...item, quantity:item.quantity - quantity}: item))
    }else{
      setCartItems((prevItems) =>
    prevItems.filter((item) => item.id === itemId )
  );
    }
    setItemCount( newCount >= 0 ? newCount : 0);
  }


  return (
    <>
    <Router> 
     <Topnav cartItems={cartItems} setCartItems={setCartItems}/> 
     <ScrollToTop/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/categories" element={<Categories/>}/>
  <Route path="/home-products" element={<HomeProducts addToCart={addToCart}/>} />
  <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} removeFromCart={removeFromCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} count={count} setCount={setCount}/>} />
  <Route path="/trending" element={<TrendingProducts  addToCart={addToCart} />} />
     </Routes>
    </Router>

 </>
  );
}
 
export default App
