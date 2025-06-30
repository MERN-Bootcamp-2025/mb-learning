import React, { useContext } from 'react'
import ReviewCard from './ReviewCard'
import ReviewsContext from '../context/review';

const ReviewList = ({reviews}) => {
  // const value = useContext(ReviewsContext);
  const {count, incrementCount} = useContext(ReviewsContext);

    console.log("Review List",reviews);
  return (
    <>
    <h3>My Reviews: </h3>
    <div className='review-list'>
        {/* {value} */}

         {count}
         <button onClick={incrementCount}>Click</button>

        {/* {reviews.length === 0 ? <p>No Reviews yet.</p> : null} */}
        {reviews.map((review,idx)=>(
            <ReviewCard key={idx} review={review}/>
        ))}
    </div>
    </>
  );
}

export default ReviewList