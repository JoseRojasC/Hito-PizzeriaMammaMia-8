import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import { useCartContext } from '../Context/CartContext'; 

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCartContext(); 

  const getPizzas = async () => {
    const respuesta = await fetch('/api/pizzas'); 
    const pizzas = await respuesta.json();
    setPizzas(pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            pizza={pizza} 
            addToCart={() => addToCart(pizza)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

