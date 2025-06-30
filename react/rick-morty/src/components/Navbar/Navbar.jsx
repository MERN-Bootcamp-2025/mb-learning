import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Navbar = () => {
    const {name} = useContext(UserContext);
  return (
    <div className="navbar navbar-dark bg-dark fs-4 p-2">
        <span className='navbar-brand'>Rick & Morty</span>
        <span className='text-white'>Hey, {name}!</span>
    </div>
  )
}

export default Navbar