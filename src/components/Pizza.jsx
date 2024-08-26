import { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import { formatCurrency } from "../assets/helpers/format"; 

function Pizzas() {
  const [pizza, setPizza] = useState({})
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        if (!res.ok) {
          throw new Error("Error fetching the pizza");
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
  }, []);

  return (
    <div className="mt-5 d-flex justify-content-center">
      {loading ? (
        <p>Cargando pizza...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : Object.keys(pizza).length > 0 && (
        <CardPizza
          desc={pizza.desc}
          name={pizza.name}
          price={formatCurrency(pizza.price)}
          ingredients={pizza.ingredients}
          img={pizza.img}
          isHome={false}
        />
      )}
    </div>
  );
}

export default Pizzas;



