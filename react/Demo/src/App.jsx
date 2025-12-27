import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  // console.log(a + b);
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
     </Routes>


     <Footer/>
     </BrowserRouter>
    </>
  );
}
export default App;

