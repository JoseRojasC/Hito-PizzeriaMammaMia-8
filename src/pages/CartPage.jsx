import React from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../Context/CartContext'; // Importa el contexto del carrito

const CartPage = () => {
  const { cartItems, total, removeFromCart, updateCartQuantity } = useCartContext(); // Usa el contexto

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <i className="fas fa-shopping-cart"></i> Carrito de Compras
      </h1>
      {cartItems.length > 0 ? (
        <div className="card p-4 shadow">
          {cartItems.map((item) => (
            <div key={item.id} className="row align-items-center mb-3">
              <div className="col-md-2">
                <img src={item.img} alt={item.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-4">
                <h5 className="text-capitalize">{item.name}</h5>
                <p><strong>Precio:</strong> ${item.price.toLocaleString()}</p>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <Button
                  variant="secondary"
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  className="me-2"
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="secondary"
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  className="ms-2"
                >
                  +
                </Button>
              </div>
              <div className="col-md-3 text-end">
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
          <hr />
          <h3 className="text-end">
            Total a pagar: <span className="text-success">${total.toLocaleString()}</span>
          </h3>
        </div>
      ) : (
        <p>No tienes productos en tu carrito de compras</p>
      )}
    </div>
  );
};

export default CartPage;

