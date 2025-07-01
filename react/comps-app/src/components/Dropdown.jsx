import React from 'react'
import { useState } from 'react'
;
const Dropdown = ({options, selection, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick =()=>{
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) =>{
    //close dropdown
    setIsOpen(false);
    //what option did the user click on?
    // console.log(option)
    onSelect(option);
  }

  const renderedOptions = options.map((option)=>(
    <div key={option.value} onClick={()=>handleOptionClick(option)}>{option.label}</div>
  ))

  // let content = 'Select';
  // if(selection){
  //   content = selection.label;
  // }

  return (
    <div>
        <div onClick={handleClick}>
          {selection?.length || 'Select...'}
        </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown