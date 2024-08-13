import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  const total = 25000;

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
              <li className="nav-item">
                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#profileModal">🔓 Profile</a>
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
        <span className="navbar-text ml-auto bg-primary text-white px-3 py-2 rounded">
          🛒 Total: ${total.toLocaleString()}
          </span>
      </div>
    </nav>
  );
};

export default Navbar;



