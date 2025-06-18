import React from 'react'
import { useState } from 'react'
import ReviewForm from './components/ReviewForm';
import "./App.css";
// import ReviewCard from './components/ReviewCard';
import ReviewList from './components/ReviewList';

const App = () => {
const[reviews, setReviews] = useState([]);

const addReview = (newReview)=>{
  setReviews([...reviews,newReview]);
}

// console.log(reviews)

  return (
    <div className='main-app'>
      <h1>Book Review App</h1>
      <ReviewForm onAddReview={addReview}/>
      <ReviewList reviews={reviews}/>
    </div>
  )
}

export default App