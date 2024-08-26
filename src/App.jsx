import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import CartModal from "./components/CartModal";
import Pizza from "./components/Pizza";

const App = () => {
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    setShowCart(true); // Mostrar el carrito
  };

  const removeFromCart = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== pizzaId)
    );
  };

  const updateCartQuantity = (pizzaId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(pizzaId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === pizzaId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <Router>
      <div>
        <Navbar
          token={token}
          handleLogout={handleLogout}
          cartItems={cartItems}
          total={total}
          removeFromCart={removeFromCart}
          handleShowCart={handleShowCart}
        />
        <Header />
        <Routes>
          {/*  <Route path="/" element={<Home addToCart={addToCart} />} /> */}
        </Routes>
        <CartModal
          cartItems={cartItems}
          total={total}
          removeFromCart={removeFromCart}
          updateCartQuantity={updateCartQuantity}
          show={showCart}
          handleClose={handleCloseCart}
        />
        <RegisterPage onRegister={handleLogin} />
        <LoginPage onLogin={handleLogin} />
        <Pizza /> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
