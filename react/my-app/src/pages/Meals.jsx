import React, { useEffect, useState } from "react";
import { fetchMeals } from "../data/api";
import MealsCard from "../components/MealsCard";
import ProductModal from "../components/ProductModal";
import FilterAccordian from "../components/FilterAccordian";
import { useFilter } from "../context/FilterContext";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
//   const [category, setCategory] = useState('');
//   const [isVeg, setIsVeg] = useState('');
  const [search, setSearch] = useState('');

const {category, isVeg} = useFilter();

  useEffect(() => {
    fetchMeals()
      .then((res) => setMeals(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = meals.filter((item) => {
    const matchCategory = category ? item.category === category : true;
    const matchType = isVeg !== null ? item.isVeg === isVeg : true;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchType && matchSearch;
  });

  console.log('Meals:',meals);
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
            disableCategory={true}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search Meals"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="row">
            {filtered.map((meal) => (
              <div key={meal.id} className="col-md-4 mb-4">
                <MealsCard meal={meal} onClick={() => setSelectedMeal(meal)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedMeal && (
        <ProductModal
          product={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
};

export default Meals;
