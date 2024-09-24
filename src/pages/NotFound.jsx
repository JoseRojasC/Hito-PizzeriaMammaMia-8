import React from 'react';
import { Link } from 'react-router-dom';
import noestaImage from '../assets/imgs/noesta.jpg';  // Importar la imagen

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 - Página no encontrada</h1>
      <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
      <img
        src={noestaImage}  // Usar la imagen importada
        alt="Página no encontrada"
        className="img-fluid my-4"
        style={{ maxWidth: '400px' }}
      />
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
