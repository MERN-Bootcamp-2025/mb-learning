import React from 'react'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react'
import UserContext from '../context/UserContext';


const Login = () => {
    const [input , setInput]= useState('');

    const {setName} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        if(input.trim === "") return alert("Please enter your name");
        setName(input);//store name in contextt
        navigate("/dashboard");//redirect to dashboard
    }
  return (
    <div className='container mt-5 text-center'>
        <h1>User <span className='text-primary'>Login</span></h1>
         <input
           type='text'
           placeholder='Enter your Name'
           style={{width: "40%",
            borderRadius: "8px",
            margin:"10px",
            border: "2px solid rgba(13, 109, 252, 0.733)",
            padding: "10px 15px",
            boxShadow: "1px 3px 9px rgba($color: #000000, $alpha: 0.25"}}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
         />
         <button onClick={handleLogin} style={{boxShadow: "1px 3px 9px rgba($color: #000000, $alpha: 0.25)"}} className='btn btn-primary fs-5'>Login</button>
    </div>
  )
}

export default Login