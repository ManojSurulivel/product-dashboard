import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';
import "../styles/ProductCard.css"

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className='search-input'>
    <input type="text"   placeholder="Search products" onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
