import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !direccion.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Si las validaciones son exitosas, navega al componente Inicio
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Regístrate</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre y apellido:</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" className="form-control" id="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
                <input type="password" className="form-control" id="confirmarContraseña" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} required />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                <i className="fas fa-user-plus" style={{ marginRight: '5px' }}></i> Registrarse
              </button>
              {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
     <br></br> 
    </div>
  );
}




