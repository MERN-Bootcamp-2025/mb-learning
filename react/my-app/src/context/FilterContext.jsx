import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [isVeg, setIsVeg] = useState(null);

  const clearFilters = () => {
    setCategory("");
    setIsVeg(null);
  };
  return (
    <FilterContext.Provider
      value={{ category, isVeg, setCategory, setIsVeg, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = ()=> useContext(FilterContext);
