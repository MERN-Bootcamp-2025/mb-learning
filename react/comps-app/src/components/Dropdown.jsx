import React from 'react'
import { useState } from 'react'
;
const Dropdown = ({options}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) =>{
    //close dropdown
    setIsOpen(false);
    //what option did the user click on?
    console.log(option)
  }

  const renderedOptions = options.map((option)=>(
    <div key={option.value} onClick={()=>handleOptionClick(option)}>{option.label}</div>
  ))

  return (
    <div>
        <div onClick={handleClick}>Select</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown