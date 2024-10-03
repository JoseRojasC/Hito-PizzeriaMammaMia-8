import React from 'react';
import { useUserContext } from '../Context/UserContext';

const Profile = () => {
  const { email, logout } = useUserContext();  

  return (
    <div className="container mt-5">
      <h1>Perfil de Usuario</h1>
      <p><strong>Email:</strong> {email}</p>
      <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
