import React from 'react'
import '../App.css';
import PropTypes from 'prop-types';


const PriceDisplay = ({price}) => {
  return (
    <p className='prod-price'>Rs. {price.toFixed(2)}</p>
  )
}

PriceDisplay.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceDisplay