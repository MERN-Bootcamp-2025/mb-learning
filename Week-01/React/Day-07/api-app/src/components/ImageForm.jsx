import React, { useState } from 'react'
import "../styles/ImageShow.css";
import search from "../assets/icons8-search.svg";
const ImageForm = ({ getAllImages }) => {
    const [name, setName] = useState("");
    // console.log(name)

    const searchImage = (imgName) => {
        getAllImages(imgName);
    }
    return (
        <div className='search-form'>
            <input type='text' placeholder='Search Name' onChange={(e) => setName(e.target.value)} />
            <button type='submit' onClick={() => searchImage(name)}>
                Search
                
            </button>
            <img className='search-img' src={search}/>
        </div>
    )
}

export default ImageForm