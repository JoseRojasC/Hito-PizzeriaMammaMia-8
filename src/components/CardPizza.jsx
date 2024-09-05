import React from 'react';

const CardPizza = ({ name, ingredients, price, img, desc, addToCart }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
                <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text flex-grow-1 text-center">{desc}</p>
                    <ul className="list-group list-group-flush text-start">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="list-group-item">🧑‍🍳 {ingredient}</li>
                        ))}
                    </ul>
                    <h4 className="card-price text-success text-center mt-3">${price.toLocaleString()}</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-success" onClick={addToCart}>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;


