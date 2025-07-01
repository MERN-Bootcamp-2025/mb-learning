import React from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom';

const Modal = ({onClose, children, actionBar}) => {
  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
  
    return ()=>{
    document.body.classList.remove('overflow-hidden');
    }
  },[])
  //we are using useEffect so that whenever modal component first render it do some things and once it unmount the thing again start to imply
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
           <div className="flex justify-end">
            {actionBar}
           </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
