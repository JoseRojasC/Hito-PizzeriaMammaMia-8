import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';
import { useCartContext } from '../Context/CartContext'; // Importa el contexto del carrito

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCartContext(); // Usa el contexto del carrito

  const getPizzas = async () => {
    const respuesta = await fetch('http://localhost:5000/api/pizzas');
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
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            img={pizza.img}
            desc={pizza.desc}
            addToCart={() => addToCart(pizza)} // Llama al contexto para añadir
          />
        ))}
      </div>
    </div>
  );
};

export default Home;




