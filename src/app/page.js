'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { useAuth } from '@/utils/context/authContext';
import { getProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

function Home() {
  // const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    getProducts().then(setProducts);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.id} productObj={product} onUpdate={getAllProducts} editDelete={false} />
      ))}
    </div>
  );
}

export default Home;
