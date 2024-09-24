import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import { useCartContext } from '../Context/CartContext';
import { pizzas as localPizzas } from '../data/pizzas'; 

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCartContext();

  const getPizzas = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/api/pizzas');
      if (!respuesta.ok) {
        throw new Error('Error al obtener las pizzas del backend');
      }
      const pizzas = await respuesta.json();
      setPizzas(pizzas);
    } catch (error) {
      console.error('Fallo la llamada a la API, usando pizzas locales:', error);
      setPizzas(localPizzas);
    }
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
