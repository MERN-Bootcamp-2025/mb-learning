import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";


const App = () => {
  return (
    <Router>
      <FilterProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/products" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CartProvider>
      </FilterProvider>
    </Router>
  );
};

export default App;
