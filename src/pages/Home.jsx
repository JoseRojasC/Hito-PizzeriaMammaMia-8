import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';  

const Home = ({ addToCart }) => {
  const [pizzas, SetPizzas] = useState([]);

  const getPizzas = async () => {
    const respuesta = await fetch('http://localhost:5000/api/pizzas');
    const pizzas = await respuesta.json();
    SetPizzas(pizzas);
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
            addToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

