import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import "../styles/CartSidbar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    increment,
    decrement,
    removeItem,
    clearCart,
    originalTotal,
    optimizedTotal,
    optimizeCart,
    showOptimized,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div
      className={`cart-sidebar position-fixed top-0 end-0 h-100 bg-light shadow-lg p-3 transition ${
        isOpen ? "open" : ""
      }`}
      style={{ width: "350px", zIndex: 9999 }}
    >
      <button
        className="btn btn-sm btn-outline-secondary position-absolute top-0 start-0 m-2"
        onClick={onClose}
      >
        <FaChevronRight />
      </button>

      <h5 className="mt-4 mb-3 text-center">Your Cart</h5>

      {cartItems.length === 0 ? (
        <p className="cart-items mt-5">Cart is empty.</p>
      ) : (
        <div className="cart-items overflow-auto" style={{ maxHeight: "70vh" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div style={{ flex: 1 }}>
                <h6 className="mb-1">{item.name}</h6>
                <small>
                  Rs. {item.price} x {item.quantity}
                </small>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => removeItem(item.id, item.type)}
                >
                  <FaTrash className="text-danger" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-dark me-1"
                  onClick={() => decrement(item.id, item.type)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-dark ms-1"
                  onClick={() => increment(item.id, item.type)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-grid mt-3">
        <button className="btn btn-warning" onClick={optimizeCart}>
          Optimize Bill
        </button>
      </div>

      {showOptimized ? (
        <div className="mt-4">
          <p>
            <strong>Original Bill: </strong>Rs.{originalTotal}
          </p>
          <p>
            <strong>Optimized Bill: </strong>Rs.{optimizedTotal}
          </p>
        </div>
      ):(
        <div className="mt-4">
          <p><strong>Total: </strong>Rs.{originalTotal}</p>
        </div>
      )}

      <div className="mt-auto pt-3 border-top">
        <h6 className="text-end mb-3">Total: Rs. {(showOptimized ? optimizedTotal : total).toFixed(2)}</h6>
        <div className="d-grid">
          <button
            className="btn btn-success"
            onClick={() => {
              alert("Proceeding to Checkout!");
              onClose();
            }}
          >
            Checkout Rs.{showOptimized ? optimizedTotal : total}
          </button>
        </div>
        <div className="d-grid mt-2">
          <button className="btn btn-outline-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
