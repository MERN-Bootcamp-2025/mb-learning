import React from 'react';
import "../../public/styles/ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="card-container">
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        products.map(product => (
          <div className="card" key={product.id}>
            <h3>{product.title}</h3>
            <p>ID: {product.id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
