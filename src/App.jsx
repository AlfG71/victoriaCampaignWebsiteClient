import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-blue-500 bg-opacity-75" className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
