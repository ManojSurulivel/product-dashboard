import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchProductsSuccess } from '../redux/actions';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const PRODUCTS_PER_PAGE = 12;

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.searchTerm);
  const sortOrder = useSelector((state) => state.sortOrder);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(fetchProductsSuccess(response.data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products
    .filter((product) => product.category.includes(filter))
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  const indexOfLastProduct = (filteredProducts.length > PRODUCTS_PER_PAGE ? currentPage : 1) * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const styles = {
    margin: "10px",
    padding:"5px",
    textAlign: "center",
    fontSize: "2rem",
    fontFamily: "sans-serif",
    fontWeight: "bold"
  }
  return (
    <div>
      <h1 style={styles}>Product Dashboard</h1>
    <SearchBar />
    <Filter />
    <div className="product-list">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    {filteredProducts.length > PRODUCTS_PER_PAGE && <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)}
      onPageChange={(page) => setCurrentPage(page)}
    />}
  </div>

  );
};

export default Dashboard;
