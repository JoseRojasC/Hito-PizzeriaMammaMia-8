import React, { useState } from 'react';

const RegisterPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      setMessage('El password y la confirmación del password deben ser iguales.');
    } else {
      const token = "fake-jwt-token"; // Aquí también se simula un token
      onRegister(token);
      setMessage('Registro exitoso.');
    }
  };

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">Registro</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
