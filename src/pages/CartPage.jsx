import React from 'react';
import { useCartContext } from '../Context/CartContext';
import { useUserContext } from '../Context/UserContext';  // Usa el contexto de usuario

const CartPage = () => {
  const { cartItems, total, removeFromCart, updateCartQuantity } = useCartContext();
  const { token } = useUserContext(); // Accede al token

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"><i className="fas fa-shopping-cart"></i> Carrito de Compras</h1>
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
                <button
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  className="btn btn-secondary"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  className="btn btn-secondary ms-2"
                >
                  +
                </button>
              </div>
              <div className="col-md-3 text-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <hr />
          <h3 className="text-end">Total a pagar: <span className="text-success">${total.toLocaleString()}</span></h3>
          <button className="btn btn-primary w-100" disabled={!token}>Pagar</button> {/* Deshabilitar si token es false */}
        </div>
      ) : (
        <p>No tienes productos en tu carrito de compras</p>
      )}
    </div>
  );
};

export default CartPage;
