import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import "../styles/ProductCard.css"

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className='filter-container'>
       <select  onChange={handleFilter}>
      <option value="">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
    </div>
   
  );
};

export default Filter;
