import {React,useState,useEffect} from 'react'
import "./topnav.css"
import { Link } from 'react-router-dom'

function Topnav({cartItems, setCartItems }) {

  const [cartOpen,setCartOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);


  const handleCartClick = () =>{
    setCartOpen(!cartOpen);
    setOverlay(!overlay);
  }


  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const addCount = (itemId) =>{
    const upgradedCart = cartItems.map((item) =>
    item.id === itemId ? {...item, quantity:item.quantity + 1, totalPrice: item.price * (item.quantity + 1) } : item);
    setCartItems(upgradedCart);
  }

  const removeCount = (itemId) =>{
    const upgradedCart = cartItems.map((item) =>
    item.id === itemId && item.quantity >0 ? {...item, quantity:item.quantity -1, totalPrice: item.price * (item.quantity - 1) } : item );

    if(upgradedCart.find((item) => item.id === itemId).quantity <= 0){
      removeItem(itemId);
    }else{
          setCartItems(upgradedCart)
    }
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPriceAllItems = cartItems.reduce((total,item) => total + item.quantity * item.price, 0) 


  useEffect(() =>{
    const body = document.body;
    if(cartOpen) {
      body.classList.add("no-scroll");
    }else{
      body.classList.remove("no-scroll");
    }
  })


  return (
    <>
      <div className="topnav">
        <div className="topnav-container">
          <Link to="/">
            <h1>AZR </h1>
          </Link>
          <div className="categories">
            <Link to="/categories">
            <h2>Categories</h2>
            </Link>
            <Link to="/product/5">
            <h2>Products</h2>
            </Link>
            <div className="cart" onClick={handleCartClick}>
              <i className="fa-solid fa-cart-shopping" />
              {totalItems !== 0 ? <p>{totalItems}</p> : ""}
            </div>
          </div>
        </div>
      </div>

      {cartOpen && (
        <div className={`side-menu ${cartOpen ? "open" : ""}`}>
          <div className="cart-main">
            <h2>Your items ({totalItems})</h2>
            <div
              className="icon"
              onClick={() => {
                setCartOpen(false);
                setOverlay(false);
              }}
            >
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="cart-items-container">
          <ul>
    {cartItems.length > 0 ? (
      cartItems.map((item) => (
        <li key={item.id}>
          <div className="items-container">
            <div className="cart-item">
            <div className="cart-image">
                      <img src={`/products/${item.img}`} alt={item.name} />
                    </div>
                    <div className="details-container">
                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>{item.totalPrice}€</p>
                      </div>
                      <div className="item-options">
                        <div className="item-btns">
                          <button onClick={() => removeCount(item.id)}>-</button>
                          <button id="mid-btn">{item.quantity}</button>
                          <button onClick={() => addCount(item.id)}>+</button>
                        </div>
                        <i
                          className="fas fa-times"
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                    </div>
            </div>
          </div>
        </li>
      ))
    ) : (
      <div className="no-items-text">
      <h2>Your cart is empty!</h2>
      <p>Check out some incredible items in your shop! You won't regret it.</p>
      <Link to="/categories">
      <button onClick={handleCartClick}>Discover</button>
      </Link>
      </div>
    )}
  </ul>
          </div>
          <div className="cart-checkout">
            <h3>Total: {totalPriceAllItems}€</h3>
            <button>Check-Out</button>
          </div>
        </div>
      )}
      {overlay && (
        <div
          className={`overlay ${cartOpen ? "open" : ""}`}
          onClick={() => {
            setCartOpen(false);
            setOverlay(false);
          }}
        />
      )}
    </>
  );
}

export default Topnav