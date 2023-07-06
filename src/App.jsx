import './App.css';
import './style.css';
import React, { useState, useEffect } from 'react';
import Preloader from "./components/Pre";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load}/>
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
