import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout, cartItems, total, handleShowCart }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía!</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">🍕 Home</Link>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleLogout}>🔓 Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">🔐 Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#registerModal">🔐 Register</a>
                            </li>
                        </>
                    )}
                </ul>
                <button 
                    className="btn navbar-total-button ml-auto" 
                    onClick={handleShowCart}
                >
                    🛒 <span className="ml-2">Total: ${total.toLocaleString()}</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;









