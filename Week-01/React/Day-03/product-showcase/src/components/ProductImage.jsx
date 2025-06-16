import React from 'react'
import "../App.css";
import PropTypes from 'prop-types';


const ProductImage = ({src, name}) => {
  return (
    <div className='imageWrapper'>
        <img src={src} alt={name} className='prod-image'/>
    </div>
  )
}

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductImage;