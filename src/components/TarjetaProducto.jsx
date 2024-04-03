
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function TarjetaProducto(props) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '0.25rem', margin: '1rem', padding: '0.5rem' }}>
      <Link to={`/detalles-producto/${props.ids}`}>
      <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={props.img} alt='' />
      </Link>
      <div style={{ padding: '1rem' }}>
        <h5 style={{ margin: '0', marginBottom: '0.5rem' }}>{props.name}</h5>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{props.description}</p>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>${props.price}</p>
        <Link to="/detalles-producto">
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem' }}>Comprar</button>
        </Link>
      </div>
    </div>
  );
}

export default TarjetaProducto;