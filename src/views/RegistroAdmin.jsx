import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistroAdmin() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/admin/panel');
  };

  return (
    <div className="container mt-5">
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Regístrate como nuevo administrador</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre y apellido:</label>
                <input type="text" className="form-control" id="nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" className="form-control" id="telefono" required />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" className="form-control" id="direccion" required />
              </div>
              <div className="form-group">
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" className="form-control" id="contraseña"  required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
                <input type="password" className="form-control" id="confirmarContraseña" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmarCodigo">Codigo administrador </label>
                <input type="password" className="form-control" id="confirmarCodigo" required />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                <i className="fas fa-user-plus" style={{ marginRight: '5px' }}></i> Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
     <br></br> 
    </div>
  );
}




