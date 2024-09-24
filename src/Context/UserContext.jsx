import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); 

  const login = (newToken) => setToken(newToken); 
  const logout = () => setToken(false); 

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUserContext = () => {
  return useContext(UserContext);
};
