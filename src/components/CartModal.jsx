import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CartModal = ({ cartItems, total, removeFromCart, updateCartQuantity, show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                            <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ flex: 1, marginLeft: '10px' }}>
                                <h6>{item.name}</h6>
                                <p>${item.price.toLocaleString()} x {item.quantity}</p>
                                <div className="d-flex align-items-center">
                                    <Button variant="secondary" size="sm" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <Button variant="secondary" size="sm" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</Button>
                                </div>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                Eliminar
                            </Button>
                        </div>
                    ))
                ) : (
                    <p>No tienes productos en tu carrito de compras</p>
                )}
                <h4>Total a pagar: ${total.toLocaleString()}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary">
                    Pagar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CartModal;
