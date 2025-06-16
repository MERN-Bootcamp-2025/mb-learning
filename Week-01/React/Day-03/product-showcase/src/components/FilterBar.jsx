import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';


const FilterBar = ({categories, selectedCategories, onSelectCategory, searchQuery, onSearch}) => {
  return (
    <div className='filterbar'>
        <select onChange={e=>onSelectCategory(e.target.value)} value={selectedCategories}>
            <option value="">All Categories</option>
            {categories.map(catg=>(
                <option key={catg} value={catg}>{catg}</option>
            ))}
        </select>

        <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
        />
    </div>
  )
}

FilterBar.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategories: PropTypes.string.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default FilterBar