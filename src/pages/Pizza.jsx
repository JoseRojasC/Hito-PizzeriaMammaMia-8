import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas'; 
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
        // primero backend
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) {
          throw new Error('Error fetching pizza from backend');
        }
        const pizzaData = await res.json();
        setPizza(pizzaData);
      } catch (error) {
        // Si hay un error con el backend, usamos el archivo local `pizza.js`
        const pizzaFromLocal = pizzas.find(pizza => pizza.id === id);
        if (pizzaFromLocal) {
          setPizza(pizzaFromLocal);
        } else {
          setError('Pizza not found');
        }
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
