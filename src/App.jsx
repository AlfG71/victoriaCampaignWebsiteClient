import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackGroundIMG from './assets/Fotos_para_pagina_de_Myrna/victor-e015e487be9999636f9ea6350ff28a8a-1200x800-876085745.jpeg'

function App() {
  return (
    <div className="bg-blue-500 bg-opacity-75 App full-height">
      <Navbar />

      <div className="flex-1 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BackGroundIMG})` }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App
