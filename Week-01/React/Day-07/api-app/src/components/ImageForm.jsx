import React, { useState } from 'react'
import "../styles/ImageShow.css";
import search from "../assets/icons8-search.svg";
import Button from './Button';
const ImageForm = ({ getAllImages }) => {
    const [name, setName] = useState("");
    // console.log(name)

    const searchImage = (imgName) => {
        getAllImages(imgName);
    }
    return (
        <div className='search-form'>
            <input type='text' placeholder='Search Name' onChange={(e) => setName(e.target.value)} />
            {/* <button type='submit' onClick={() => searchImage(name)}>
                Search
                
            </button> */}
            <Button type='asjkdahkds' onClick={()=>searchImage(name)} text='Search'/>
            <img className='search-img' src={search}/>
        </div>
    )
}

export default ImageForm