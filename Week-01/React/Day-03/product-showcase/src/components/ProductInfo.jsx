import React from 'react'
import '../App.css';
import PriceDisplay from './PriceDisplay';
import PropTypes from 'prop-types';



const ProductInfo = ({name,price}) => {
  return (
    <div className='prod-info'>
        <h2>{name}</h2>
        <PriceDisplay price={price}/>
    </div>
  )
}

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductInfo;