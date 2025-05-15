import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Intro from './Component/Home/Intro'
import Home from './Component/Home/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/w" element={<Intro />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App