import React from 'react';

function TarjetaProducto(props) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '0.25rem', margin: '1rem', padding: '0.5rem' }}>
      <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={props.img} alt='' />
      <div style={{ padding: '1rem' }}>
        <h5 style={{ margin: '0', marginBottom: '0.5rem' }}>{props.name}</h5>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{props.description}</p>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>${props.price}</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem' }}>Comprar</button>
      </div>
    </div>
  );
}

export default TarjetaProducto;
