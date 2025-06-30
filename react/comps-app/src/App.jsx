import React from 'react'
import Dropdown from './components/Dropdown'

const App = () => {
  const options =[
    {label: "Pink", value:"pink"},
    {label: "Purple", value:"purple"},
    {label: "Peach", value:"peach"},
  ]
  return <Dropdown options={options}/>
}

export default App