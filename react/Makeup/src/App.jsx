import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}


export default App; 