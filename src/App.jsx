import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <RegisterPage />
        <LoginPage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

