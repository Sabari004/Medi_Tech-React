
import React from 'react';
import {  } from '@mui/material';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/appointment' element={<Appointment />}></Route>
          <Route path='/services' element={<Services />}></Route>
      </Routes>
    </div>
  ) 
}