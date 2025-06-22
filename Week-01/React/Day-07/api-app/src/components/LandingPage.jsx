import React, { useState } from 'react'
import ImageShow from './ImageShow';
import "../styles/LandingPage.css";
import menuIcon from "../assets/icons8-menu.svg";

const LandingPage = ({ onContinue }) => {
    // const [ show, setShow] = useState(false);

    // const handleClick = ()=>{
    //     setShow(!show);
    // }
    return (
        <div className='main-div'>
            <nav>
                <h5>Rick&Morty</h5>
                <img src={menuIcon} alt='menu' />
            </nav>
            <div className='gallery-div'>
                <img src="https://images.unsplash.com/photo-1748799560336-bb12ea8466b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <div className='red-box'></div>
                <h1>Our Gallery.</h1>
                <button onClick={onContinue}>
                    View
                </button>

            </div>
            <h5 className='footer-text'>Designed by Arzoo Jain.</h5>
            {/* {show && <ImageShow/>} */}
        </div>
    )
}

export default LandingPage