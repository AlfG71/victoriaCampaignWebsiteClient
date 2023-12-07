import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';

import BackGroundIMG from './assets/Fotos_para_pagina_de_Myrna/logo_nombre_de_Mryna.jpg'
import FotoPerfil1 from "./assets/Fotos_para_pagina_de_Myrna/Foto MC 2x2 para papeleta. MVC.jpeg"

function App() {
  return (
    <div className="bg-blue-500 bg-opacity-75 App full-height w-screen h-screen">
      <Navbar />
      <div className="flex-1 bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${BackGroundIMG})` }}>

      {/* <img src={FotoPerfil1} className="w-16 rounded-full home-image flex"/> */}

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />

      {/* <ImageCarousel /> */}
    </div>
  );
}

export default App
