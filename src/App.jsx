import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  const [token, setToken] = useState(null);

  // Cargar el token desde localStorage al montar el componente
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken); // Guarda el token en localStorage
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('authToken'); // Elimina el token del localStorage
  };

  return (
    <Router>
      <div>
        <Navbar token={token} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <RegisterPage onRegister={handleLogin} />
        <LoginPage onLogin={handleLogin} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;


