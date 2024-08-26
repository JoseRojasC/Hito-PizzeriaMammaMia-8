import React from 'react';
import headerImage from '../assets/imgs/Header.jpg';

const Header = () => {
  return (
    <header className="header-container">
      <img src={headerImage} alt="Header" />
      <div className="header-text">
        <h1>Bienvenido a Pizzería Mamma Mía</h1>
        <p>Las mejores pizzas de la ciudad</p>
      </div>
    </header>
  );
};

export default Header;
