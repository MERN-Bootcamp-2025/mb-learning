import React, { useState } from "react";
import { useFilter } from "../context/FilterContext";
// onCategorySelect, onTypeSelect, onClear,

const FilterAccordian = ({ disableCategory = false }) => {
  const [open, setOpen] = useState(true);
  const { category, isVeg, setCategory, setIsVeg, clearFilters } = useFilter();

  const categories = ["burgers", "fries", "drinks"];

  return (
    <div className="accordion" id="filterAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" onClick={() => setOpen(!open)}>
            Filters
          </button>
        </h2>
        {open && (
          <div className="accordion-body">
            {!disableCategory && (
              <div className="mb-2">
                <strong>Category</strong>
                <div className="d-flex flex-wrap mt-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`btn btn-sm m-1 ${
                        category === cat
                          ? "btn-primary text-white"
                          : "btn-outline-primary"
                      }`}
                      // onClick={() => onCategorySelect(cat)}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-2">
              <strong>Type</strong>
              <div className="d-flex flex-wrap mt-1">
                <button
                  className={`btn btn-sm m-1 ${
                    isVeg === true
                      ? "btn-success text-white"
                      : "btn-outline-success"
                  }`}
                  // onClick={()=>onTypeSelect(true)}
                  onClick={() => setIsVeg(true)}
                >
                  Veg
                </button>
                <button
                  className={`btn btn-sm m-1 ${
                    isVeg === false
                      ? "btn-danger text-white"
                      : "btn-outline-danger"
                  }`}
                  // onClick={()=>onTypeSelect(false)}
                  onClick={() => setIsVeg(false)}
                >
                  Non-Veg
                </button>
              </div>
            </div>
            <button
              className="btn btn-secondary btn-sm mt-2"
              // onClick={onClear}
              onClick={clearFilters}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterAccordian;
