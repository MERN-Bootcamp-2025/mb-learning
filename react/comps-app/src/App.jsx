// import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
import CounterPage from './pages/CounterPage'
import ModalPage from './pages/ModalPage'

const App = () => {

  // const [selection, setSelection] =useState(null);

  // const handleSelect=(option)=>{
  //    setSelection(option);
  // }
  // const options =[
  //   {label: "Pink", value:"pink"},
  //   {label: "Purple", value:"purple"},
  //   {label: "Peach", value:"peach"},
  // ]
  // return <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
  // return <ModalPage/>
  return <CounterPage initialCount={10}/>
}

export default App