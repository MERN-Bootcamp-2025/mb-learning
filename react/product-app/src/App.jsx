import React, { useEffect, useState } from 'react';
import ProductForm from './component/ProductForm';
import ProductList from './component/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/shop/products');
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts(); // initial load
  }, []);

  return (
    <div>
      <ProductForm onProductAdded={fetchProducts} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
