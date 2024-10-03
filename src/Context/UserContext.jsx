import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); 
  const [email, setEmail] = useState(null); 

  // Método para hacer login
  const login = async (credentials) => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('jwtToken', data.token);
    } else {
      throw new Error(data.error);
    }
  };

  // registrar un usuario
  const register = async (credentials) => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('jwtToken', data.token); 
    } else {
      throw new Error(data.error);
    }
  };

  // logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('jwtToken');  
  };

  // perfil del usuario
  const getProfile = async () => {
    const res = await fetch('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (res.ok) {
      setEmail(data.email);
    } else {
      throw new Error(data.error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
