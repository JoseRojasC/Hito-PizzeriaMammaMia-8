import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import CartPage from './pages/CartPage'; 
import Pizza from './pages/Pizza'; 
import Profile from './pages/Profile'; 
import NotFound from './pages/NotFound'; 
import RegisterPage from './pages/RegisterPage'; 
import LoginPage from './pages/LoginPage'; 

const App = () => {
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === pizza.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar
        token={token}
        handleLogout={handleLogout}
        total={total}
      />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              total={total}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
            />
          }
        />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile handleLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> {/* Redirige a la página 404 si la ruta no existe */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
