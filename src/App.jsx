import React from 'react';
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
import { CartProvider } from './Context/CartContext';
import { UserProvider, useUserContext } from './Context/UserContext';

// Definir el ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext(); // Acceder al token desde el UserContext
  return token ? children : <Navigate to="/login" />;  // Si no está autenticado, redirigir al login
};

const AppContent = () => {
  const { token } = useUserContext();  // Obtener el estado del token

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Si el usuario está autenticado, redirigir al Home */}
        <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        {/* Usar ProtectedRoute para proteger la página del perfil */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/404" element={<NotFound />} />
        {/* Redirigir a /404 si la ruta no existe */}
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
        <AppContent />  {/* El contenido principal dentro del UserProvider */}
      </UserProvider>
    </CartProvider>
  );
};

export default App;
