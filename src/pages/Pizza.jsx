import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardPizza from '../components/CardPizza';
import { useCartContext } from '../Context/CartContext'; 

function Pizza() {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartContext(); 

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`/api/pizzas/${id}`);
        if (!res.ok) {
          throw new Error('Error fetching the pizza');
        }
        const pizzaData = await res.json();
        setPizza(pizzaData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPizza();
  }, [id]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      {loading ? (
        <p>Cargando pizza...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <CardPizza
          pizza={pizza} 
          addToCart={() => addToCart(pizza)} 
          isDetailPage={true} 
        />
      )}
    </div>
  );
}

export default Pizza;
