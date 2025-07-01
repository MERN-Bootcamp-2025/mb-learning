import React, { useState } from "react";
import "../../public/styles/ProductForm.css";

const ProductForm = ({onProductAdded}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a product name");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/admin/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await response.json();
      console.log("Product added:", data);
      onProductAdded();
      setTitle("");
    } catch (err) {
      console.error("Error adding product: ", err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h1>
          Add <span>Product.</span>
        </h1>
        <input
          type="text"
          placeholder="Enter Product"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
