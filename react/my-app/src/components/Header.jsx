import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
        <span className="navbar-brand mb-0 h1">Burger Shop</span>
        <div className="d-flex">
          <Link
            to="/products"
            className={`nav-link text-white ${
              location.pathname === "/products" ? "fw-bold" : ""
            }`}
          >
            Products
          </Link>
          <Link
            to="/meals"
            className={`nav-link text-white ms-3 ${
              location.pathname === "/meals" ? "fw-bold" : ""
            }`}
          >
            Meals
          </Link>
        </div>
        <div
          className="position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => setShowCart(true)}
        >
          <FaShoppingCart size={20} className="text-white" />
          {totalItems > 0 && (
            <span className="badge bg-light text-dark position-absolute top-0 start-100 translate-middle">
              {totalItems}
            </span>
          )}
        </div>
      </div>
      <CartSidebar isOpen={showCart} onClose={()=>setShowCart(false)}/>
    </>
  );
};

export default Header;
