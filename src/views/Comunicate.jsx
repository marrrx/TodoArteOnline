import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Comunicate() {
  const navigate = useNavigate();

  const handleHome = (event) => {
    event.preventDefault();
    // Verificar si todos los campos obligatorios están completos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const comentarios = document.getElementById('comentarios').value;

    if (nombre && email && asunto && comentarios) {
      alert('Su mensaje fue enviado con éxito.');
      navigate('/');
    } else {
      alert('Por favor complete todos los campos son obligatorios.');
    }
  };

  return (
    <>
      <div className="container m-5">
        <div className="border rounded p-4">
          <h2 className="mb-4">Envíe su mensaje</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" className="form-control" id="asunto" required />
            </div>
            <div className="form-group">
              <label htmlFor="comentarios">Comentarios</label>
              <textarea className="form-control" id="comentarios" cols="15" rows="5" required></textarea>
            </div>
            <div>
              <label>Una vez enviado tu mensaje, te redirigiremos a la página de inicio</label>
            </div>
            <button onClick={handleHome} className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
