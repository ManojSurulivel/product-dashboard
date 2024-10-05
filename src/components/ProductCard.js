import React from 'react';
import "../styles/ProductCard.css"
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {

  return (
    <div  className='product-card'>
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
      <p>{product.category}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
