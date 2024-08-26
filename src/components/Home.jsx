import React from 'react';
import CardPizza from './CardPizza';  
import { pizzas } from '../pizzas';

const Home = ({ addToCart }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map(pizza => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza {...pizza} addToCart={() => addToCart(pizza)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;



