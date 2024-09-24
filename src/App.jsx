import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Asegúrate de que Router sea BrowserRouter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { CartProvider } from './Context/CartContext';
import { UserProvider, useUserContext } from './Context/UserContext';

// Definir el ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext(); 
  return token ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const { token } = useUserContext(); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Esto debe cargar el Home en la ruta base */}
        <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </CartProvider>
  );
};

export default App;
