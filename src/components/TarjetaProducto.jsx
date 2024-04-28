
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function TarjetaProducto(props) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '0.25rem', margin: '1rem', padding: '0.5rem' }}>
      <Link to={`/detalles-producto/${props.ids}`} title='Enlace al producto'>
      <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={props.img} alt={props.name} title={props.name} />
      </Link>
      <div style={{ padding: '1rem' }}>
        <h1 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1.5rem'}}>{props.name}</h1>
        <h2 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1rem' }}>{props.author}</h2>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{props.description}</p>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{props.price}</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem' }}>Comprar</button>
      </div>
    </div>
  );
}

export default TarjetaProducto;