import axios from "axios";
import React, { useEffect, useState } from "react";

const BookList = ({refresh}) => {
  const [books, setBooks] = useState([]);//stored the data fetched from the backend

  //API call runs when the component mounts or refresh changes. 
  // It fetches books from the backend and updates the book state
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books", err));
  },[refresh]);

  return (
    <div style={{padding:'20px', margin:"0 auto"}}>
        <h2 style={{textAlign:"center"}}>My Books</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:'20px', marginLeft:"60px"}}>
            {books.map((book,index)=>{
                return (<div key={index} style={{
                    border : '1px solid #ccc',
                    borderRadius: "30px",
                    padding:"15px",
                    width: "280px",
                    height:"120px",
                    boxShadow: "0 2px 5px rgba(63, 163, 221, 0.59)",
                    textAlign:"center"
                }}>
                    <h4>{book["Book Name"]}</h4>
                    <p><strong style={{color:"rgba(50, 155, 216, 0.99)"}}>Author: </strong> {book["Author"]}</p>
                </div>)
            })}
        </div>
    </div>
  )
};

export default BookList;
