import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        if (expandedIndex === index) {//to handle toggle
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    }

    const renderedtems = items.map((item, idx) => {
        const isExpanded = idx === expandedIndex;
        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer' onClick={() => handleClick(idx)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-3'>{item.content}</div>}
            </div>
        );
    });

    return (
        <div className='border-x border-y rounded'>{renderedtems}</div>
    )
}

export default Accordion