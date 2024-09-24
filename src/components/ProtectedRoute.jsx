// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext'; 

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();  

  if (!token) {
    return <Navigate to="/login" />; 
  }

  return children;  // Mostrar el contenido si el usuario está autenticado
};

export default ProtectedRoute;
