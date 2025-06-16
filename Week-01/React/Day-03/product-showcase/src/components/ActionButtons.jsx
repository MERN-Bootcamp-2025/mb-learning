import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'
import '../App.css';


const ActionButtons = ({id, isFavorite: initialFavorite}) => {
    const [isFavorite, setIsFavorite] = useState(initialFavorite);

    const toggleFav =()=>{
        setIsFavorite(prev=>!prev);
    }
  return (
    <div className='toggle-action'>
        <button onClick={toggleFav} className='btn-active'>
            {isFavorite ? '💖' : '🤍'} Favorite
        </button>
    </div>
  )
}

ActionButtons.propTypes = {
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
}

export default ActionButtons