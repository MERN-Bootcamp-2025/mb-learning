import React from "react";

const ProductModal = ({ product, onClose }) => {
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
            <p style={{position:'absolute', top:'40px'}}>{product.desc}</p>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={product.imageUrl} className="img-fluid mb-3" alt={product.name} />
            <p>{product.description}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={() => alert('Added to cart')}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
