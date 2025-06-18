import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewList = ({reviews}) => {
    console.log("Review List",reviews);
  return (
    <>
    <h3>My Reviews: </h3>
    <div className='review-list'>
        
        {/* {reviews.length === 0 ? <p>No Reviews yet.</p> : null} */}
        {reviews.map((review,idx)=>(
            <ReviewCard key={idx} review={review}/>
        ))}
    </div>
    </>
  );
}

export default ReviewList