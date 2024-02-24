import {React,useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./categories.css"
import { products } from '../utils';
import Footer from "../footer";

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategory = (category) =>{
        setSelectedCategory(category);
    }

const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const category = params.get('category') || 'All';
  setSelectedCategory(category);
}, [location]);

  return (
<>
<div className="categories-container">
    <h1>{selectedCategory}</h1>
    <div className="categories-button">
      <button onClick={() => setSelectedCategory("All")}>All</button>
    {Array.from(new Set(products.map(product => product.category))).map(category => (
        <button key={category} onClick={() => handleCategory(category)}>{category}</button>
    )) }
    </div>
    <div className="categories-page">
        {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id}>
          <div className="categories-items" >
            <div className="categories-img">
            <img src={`/products/${product.img}` }alt={product.name} />
            </div>
            <div className="category-details">
            <h2>{product.name}</h2>
            <p>{product.price}€</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
</div>
<Footer/>
</>
  )
}

export default Categories