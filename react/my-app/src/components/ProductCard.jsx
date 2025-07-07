import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onClick }) => {
//   const [quantity, setQuantity] = useState(0);

  const {addToCart, increment, decrement, cartItems} = useCart();
//   const type = 'product';

  const itemInCart = cartItems.find((i)=> i.id === product.id);
  const quantity = itemInCart?.quantity || 0 ;

  return (
    <div
      className="card h-100 shadow-sm"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>{product.desc.slice(0, 10)}...</p>
        <div className="d-flex align-items-center">
          {/* <button
            className="btn btn-sm btn-outline-dark me-2"
            onClick={(e) => {
              e.stopPropagation();
              setQuantity(Math.max(quantity - 1, 0));
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="btn btn-sm btn-outline-dark ms-2"
            onClick={(e) => {
              e.stopPropagation();
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
          <button
            className="btn btn-sm btn-success ms-3"
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to cart!");
            }}
          >
            Add to Cart
          </button> */}

          {quantity === 0 ? (
            <button className="btn btn-success btn-sm" onClick={(e)=>{
                e.stopPropagation();
                addToCart(product)
            }}>
                Add to Cart
            </button>
          ):(
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-dark btn-sm" onClick={(e)=>{
                    e.stopPropagation();
                    decrement(product.id);
                }}>
                    -
                </button>
                <span className="mx-2">{quantity}</span>
                <button className="btn btn-outline-dark btn-sm" onClick={(e)=>{
                    e.stopPropagation();
                    increment(product.id);
                }}>
                    +
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
