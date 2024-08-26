import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPizza = ({ name, ingredients, price, img, desc, addToCart }) => {
    return (
        <div className="card mx-auto my-4 shadow-sm" style={{ maxWidth: '350px' }}>
            <img src={img} className="card-img-top img-fluid" alt={name} style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <ul className="list-group list-group-flush text-start">
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item">
                            🧑‍🍳🔪{ingredient}
                        </li>
                    ))}
                </ul>
                <h4 className="card-price text-success mt-3">
                    {price}
                </h4>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-outline-primary mr-2">
                        Editar
                    </button>
                    <button className="btn btn-success" onClick={addToCart}>
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;






