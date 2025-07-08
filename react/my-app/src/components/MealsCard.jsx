import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const MealsCard = ({ meal, onClick }) => {
//   const [quantity, setQuantity] = useState(0);


const { addToCart, increment, decrement, cartItems } = useCart();
// const type = 'meal'

const itemInCart = cartItems.find((i) => i.id === meal.id && i.type === 'meal');
const quantity = itemInCart?.quantity || 0;

  return (
    <div
      className="card h-100 shadow-sm"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={meal.isVeg ? "/public/veg.png" : "/public/nonVeg.png"}
        alt={meal.isVeg ? "Veg" : "Non-Veg"}
        width={meal.isVeg ? "22" : "42" }
        height={meal.isVeg ? "22" : "42" }
        style={{margin: meal.isVeg ? "10px" : 0}}
      />
      <img
        src={meal.img}
        alt={meal.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{meal.name}</h5>
        <p className="card-text">{meal.desc.slice(0, 10)}...</p>
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
              alert("Added to Cart");
            }}
          >
            Add to Cart
          </button> */}
          {quantity === 0 ? (
            <button className="btn btn-success btn-sm" onClick={(e)=>{
                e.stopPropagation();
                addToCart(meal,'meal')
            }}>
                Add to Cart
            </button>
          ):(
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-dark btn-sm" onClick={(e)=>{
                    e.stopPropagation();
                    decrement(meal.id);
                }}>
                    -
                </button>
                <span className="mx-2">{quantity}</span>
                <button className="btn btn-outline-dark btn-sm" onClick={(e)=>{
                    e.stopPropagation();
                    increment(meal.id);
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

export default MealsCard;
