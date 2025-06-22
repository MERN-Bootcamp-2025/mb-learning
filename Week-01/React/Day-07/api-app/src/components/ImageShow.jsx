import React, { useEffect } from 'react'
import { handleGetApi } from '../api'
import { useState } from 'react'
import ImageForm from './ImageForm';
import "../styles/ImageShow.css";

const ImageShow = () => {
  const [images, setImages] = useState([]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    getAllImages();

    const handleScroll = ()=>{

      if(window.scrollY > 50 ){
        setScrolled(true);
      }else setScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);

    return ()=> window.removeEventListener('scroll', handleScroll)
  }, []);

  const getAllImages = async (name = "") => {
    const imgData = await handleGetApi(name || "");
    console.log(imgData)
    setImages(imgData);
  }

  return (
    <div className='main'>
      <nav className={`gallery-nav ${scrolled ? 'scrolled' : ''}`}>
        <h5>Rick&Morty</h5>
        <ImageForm getAllImages={getAllImages} />
      </nav>
      <div className="gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img.image} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
      {/* <button onClick={()=>getAllImages("")}>Get All</button> */}
    </div>
  )
}

export default ImageShow