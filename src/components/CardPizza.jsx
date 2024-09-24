import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza, addToCart, isDetailPage = false }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{pizza.name}</h5>
                    <p className="card-text flex-grow-1 text-center">{pizza.desc}</p>
                    <ul className="list-group list-group-flush text-start">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index} className="list-group-item">🧑‍🍳 {ingredient}</li>
                        ))}
                    </ul>
                    <h4 className="card-price text-success text-center mt-3">${pizza.price.toLocaleString()}</h4>
                    <div className="d-flex justify-content-between mt-3">
                        {isDetailPage ? (
                            <button className="btn btn-success w-100" onClick={addToCart}>
                                Añadir al carrito
                            </button>
                        ) : (
                            <>
                                <button className="btn btn-success me-2" onClick={addToCart}>
                                    Añadir al carrito
                                </button>
                                <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">
                                    Ver más
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
