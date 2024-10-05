import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='product-details'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price} USD</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductPage;
