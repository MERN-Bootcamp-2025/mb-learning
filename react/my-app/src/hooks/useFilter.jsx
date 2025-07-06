import React, { useState } from 'react';

const useFilter = () => {
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');

    const applyCategory = (cat) =>setCategory(cat);
    const applyType = (t) => setType(t);
    const resetFilters = ()=>{
        setCategory('');
        setType('');
    }
  return {category, type, applyCategory, applyType, resetFilters};
};

export default useFilter;