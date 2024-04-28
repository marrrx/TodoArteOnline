import React from 'react';
import productos from '../data/productos.json'; // Importa el JSON de productos
import { useParams } from 'react-router-dom';
import Reseñas from './Reseñas'

function DetallesProducto() {

  const { id } = useParams();
  console.log('ID:', id);
  const producto = productos.find(producto => producto.id === parseInt(id));
  console.log('Producto:', producto);
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div style={{ maxWidth: '80%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center' }}>
        <img src={producto.imagen} alt={producto.nombre} style={{ width: '40%', maxWidth: '400px', borderRadius: '10px', marginRight: '20px' }} />
        <div>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem' }}>{producto.nombre}</h2>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2rem' }}>{producto.descripcion}</p>
          <p style={{ fontSize: '1.2rem' }}><strong>Autor:</strong> {producto.autor}</p>
          <p style={{ fontSize: '1.2rem' }}><strong>Categoría:</strong> {producto.categoría}</p>
          <p style={{ fontSize: '1.2rem' }}><strong>Descripción Corta:</strong> {producto.descripcionCorta}</p>
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>Precio: {producto.precio}</p>
          <button style={{ padding: '1rem 2rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'block', margin: 'auto', fontSize: '1.2rem' }}>Comprar</button>
        </div>
      </div>

      <Reseñas />

    </>
  );
}

export default DetallesProducto;
