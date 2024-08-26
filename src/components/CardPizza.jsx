import React from 'react';

const CardPizza = ({ name, ingredients, price, img, desc, addToCart }) => {
    return (
        <div className="card shadow-sm" style={{ borderRadius: '20px', overflow: 'hidden', border: 'none', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
            <div className="card-body" style={{ backgroundColor: '#fff', padding: '25px', textAlign: 'center' }}>
                <h5 className="card-title" style={{ fontWeight: 'bold', color: '#333' }}>{name}</h5>
                <p className="card-text" style={{ fontSize: '0.95em', color: '#777', minHeight: '60px' }}>{desc}</p>
                <ul className="list-group list-group-flush" style={{ marginBottom: '15px', padding: '0', textAlign: 'left' }}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="list-group-item" style={{ fontSize: '0.85em', color: '#555', border: 'none', paddingLeft: '0' }}>
                            🧑‍🍳🔪{ingredient}
                        </li>
                    ))}
                </ul>
                <h4 className="card-price text-success mt-3" style={{ fontWeight: 'bold', color: '#28a745' }}>
                    ${price.toLocaleString()}
                </h4>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-outline-primary mr-2" style={{ borderRadius: '30px', padding: '0.5rem 2rem', fontWeight: 'bold' }}>Editar</button>
                    <button className="btn btn-success" style={{ borderRadius: '30px', padding: '0.5rem 2rem', fontWeight: 'bold', color: '#fff' }} onClick={addToCart}>
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;





