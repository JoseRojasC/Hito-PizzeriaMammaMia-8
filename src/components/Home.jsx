import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importación de la imagen del header
import headerImage from '../assets/imgs/Header.jpg';

const Home = () => {
    return (
      <div className="container-fluid p-0">
        <div className="jumbotron text-center" style={{ 
          backgroundImage: `url(${headerImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          color: 'white', 
          padding: '100px 25px', 
          marginBottom: '30px'
        }}>
          <h1 className="display-4">¡Bienvenido a Pizzería Mamma Mía!</h1>
          <p className="lead">Las mejores pizzas de la ciudad</p>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
                  className="card-img-top" 
                  alt="Napolitana" 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Pizza Napolitana</h5>
                  <p className="card-subtitle mb-2 text-muted">Ingredientes:</p>
                  <p className="card-text">
                    🍕 mozzarella, tomates, jamón, orégano
                  </p>
                  <h6 className="card-price">Precio: $5.950</h6>
                  <a href="#" className="btn btn-outline-primary mr-2">
                    👀 Ver Más
                  </a>
                  <a href="#" className="btn btn-outline-success">
                    🛒 Añadir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab" 
                  className="card-img-top" 
                  alt="Española" 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Pizza Española</h5>
                  <p className="card-subtitle mb-2 text-muted">Ingredientes:</p>
                  <p className="card-text">
                    🍕 mozzarella, gorgonzola, parmesano, provolone
                  </p>
                  <h6 className="card-price">Precio: $6.950</h6>
                  <a href="#" className="btn btn-outline-primary mr-2">
                    👀 Ver Más
                  </a>
                  <a href="#" className="btn btn-outline-success">
                    🛒 Añadir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" 
                  className="card-img-top" 
                  alt="Pepperoni" 
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Pizza Pepperoni</h5>
                  <p className="card-subtitle mb-2 text-muted">Ingredientes:</p>
                  <p className="card-text">
                    🍕 mozzarella, pepperoni, orégano
                  </p>
                  <h6 className="card-price">Precio: $6.950</h6>
                  <a href="#" className="btn btn-outline-primary mr-2">
                    👀 Ver Más
                  </a>
                  <a href="#" className="btn btn-outline-success">
                    🛒 Añadir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;


