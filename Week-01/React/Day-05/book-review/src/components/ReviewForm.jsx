import React from 'react'
import { useState } from 'react'

const ReviewForm = ({ onAddReview }) => {

    const[formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        review: '',
    })

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData(prev=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview(formData);
        setFormData({
            title: '',
            author: '',
            date: '',
            review: '',
        })
    }

    return (

        <form onSubmit={handleSubmit} className='review-form'>
            <input name='title' placeholder='Title' value={formData.title} onChange={handleChange} required />
            <input name='author' placeholder='Author' value={formData.author} onChange={handleChange} required />
            <input type='date' name='date' placeholder='date' value={formData.date} onChange={handleChange} required />
            <textarea name='review' placeholder='Enter Review' value={formData.review} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>

    )
}

export default ReviewForm