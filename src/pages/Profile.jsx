import React from 'react';

const Profile = ({ handleLogout }) => {
  const email = "correoejemplo@example.com"; 

  return (
    <div className="container mt-5">
      <h1>Perfil de Usuario</h1>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
