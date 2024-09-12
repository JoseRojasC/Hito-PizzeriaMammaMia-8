// src/context/CartContext.js
import { createContext, useState, useContext } from 'react';

// Crea el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar al carrito
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

  // Función para eliminar del carrito
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad en el carrito
  const updateCartQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Calcular el total del carrito
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir el contexto del carrito
export const useCartContext = () => {
  return useContext(CartContext);
};
