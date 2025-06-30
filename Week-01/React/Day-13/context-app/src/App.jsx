import React from 'react'
import TargetComponent from './components/TargetComponent'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboad from './pages/Dashboad';

const App = () => {
  return (
    // <div>
    //   {/* <TargetComponent/> */}
    //   <Login/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboad />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App