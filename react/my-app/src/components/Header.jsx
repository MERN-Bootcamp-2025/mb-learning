import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import { useCart } from "../context/CartContext";

const Header = () => {
  const location = useLocation();
  const {totalItems} = useCart();
  return (
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
      <div className="text-white">
        <FaShoppingCart size={20} style={{cursor:'pointer'}}/>
        <span className="badge bg-light text-dark ms-1">{totalItems}</span>
      </div>
    </div>
  );
};

export default Header;
