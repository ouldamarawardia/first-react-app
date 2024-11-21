
import './App.css';
import React, {useState} from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Team from './components/Team';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
function App() {

  return (
    <div className='App' >
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/> 
          <Route path="/About" element={<About/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/ourteam" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
