import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import About from './pages/about/about.js';
import Login from './components/loginform/LoginForm.js';
import Footer from './components/footer/Footer.js';
import NotFound from './pages/notfound/notFound.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
