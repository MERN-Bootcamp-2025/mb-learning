import React, { useEffect, useState } from "react";
import { fetchProducts } from "../data/api";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import FilterAccordian from "../components/FilterAccordian";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useFilter } from "../context/FilterContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  //   const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
//   const [category, setCategory] = useState("");
//   const [isVeg, setIsVeg] = useState(null);

   const {category, isVeg} = useFilter();

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = products.filter((item) => {
    //   (filter ? item.category === filter : true) &&
    //   item.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category ? item.category?.toLowerCase() === category.toLowerCase() : true;
    const matchType = isVeg !== null ? item.isVeg === isVeg : true;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchType && matchSearch;
  });
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-3">
          <FilterAccordian
            // onCategorySelect={setCategory}
            // onTypeSelect={setIsVeg}
            // onClear={() => {
            //   setCategory("");
            //   setIsVeg(null);
            // }}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search Items"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="row">
            {filtered.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;

