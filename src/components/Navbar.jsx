import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { useUserContext } from '../Context/UserContext';

const Navbar = () => {
  const { total } = useCartContext();
  const { token, logout } = useUserContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">🍕 Home</Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">👤 Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logout}>🔓 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/cart" className="btn navbar-total-button">
            🛒 <span className="ml-2">Total: ${total.toLocaleString()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
