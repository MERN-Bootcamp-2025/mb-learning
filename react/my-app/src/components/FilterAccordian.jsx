import React, { useState } from "react";
import { useFilter } from "../context/FilterContext";
// onCategorySelect, onTypeSelect, onClear,

const FilterAccordian = ({  disableCategory = false }) => {
  const [open, setOpen] = useState(true);
  const { setCategory, setIsVeg, clearFilters } = useFilter();

  const categories = ["burgers", "fries", "coke"];

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
            {!disableCategory && (<div className="mb-2">
              <strong>Category</strong>
              <div className="d-flex flex-wrap mt-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="btn btn-outline-primary btn-sm m-1"
                    // onClick={() => onCategorySelect(cat)}
                    onClick={()=>setCategory(cat)}
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
                className="btn btn-outline-success btn-sm m-1" 
                // onClick={()=>onTypeSelect(true)}
                onClick={()=> setIsVeg(true)}
                > 
                    Veg
                </button>
                <button 
                className="btn btn-outline-danger btn-sm m-1" 
                // onClick={()=>onTypeSelect(false)}
                onClick={()=>setIsVeg(false)}
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
