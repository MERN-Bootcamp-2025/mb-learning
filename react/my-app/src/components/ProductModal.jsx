import React from "react";
import { useCart } from "../context/CartContext";

const ProductModal = ({ product, onClose }) => {
  const { cartItems, addToCart, increment, decrement } = useCart();

  const itemInCart = cartItems.find(
    (item) => item.id === product.id && item.type === "product"
  );
  const quantity = itemInCart?.quantity || 0;

  // const handleAdd = ()=>{
  //     addToCart(product, 'product')
  // }
  console.log(quantity);
  return (
    <div
      className="modal show fade d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <p style={{ position: "absolute", top: "40px" }}>{product.desc}</p>
            {/* <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button> */}
          </div>
          <div className="modal-body mt-2">
            <img
              src={product.img}
              className="img-fluid mb-3"
              alt={product.name}
            />
            <p>{product.description}</p>
          </div>
          <div className="modal-footer d-flex align-items-center">
            {/* <button className="btn btn-success" onClick={handleAdd}>
              Add to Cart
            </button> */}

            {quantity === 0 ? (
              <button
                className="btn btn-success "
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product, "product");
                }}
              >
                Add to Cart
              </button>
            ) : (
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    decrement(product.id);
                  }}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    increment(product.id);
                  }}
                >
                  +
                </button>
              </div>
            )}

            <button className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
