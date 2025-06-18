import React from 'react'
import "../App.css";

const ReviewCard = ({review}) => {
    console.log("Review Card",review)
  return (
    <div className='review-card'>
        <h3>{review.title}</h3>
        <h5>{review.author}</h5>
        <p>{review.review}</p>
        <p className='date'>{review.date}</p>
    </div>
  );
}

export default ReviewCard