import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewService from './components/NewService';
import Services from './components/Services';


function App() {

    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/new-service' element={<NewService />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;


