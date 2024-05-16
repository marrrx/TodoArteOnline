import React from 'react';
import { useContext } from 'react';
import productos from '../data/productos.json'; // Importa el JSON de productos
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context';
import Reseñas from './Reseñas';

function DetallesProducto() {
  const { setProductoDeseosGlobal, setProductoGlobal } = useContext(MyContext);

  const { id } = useParams();
  const producto = productos.find(producto => producto.id === parseInt(id));
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const agregarCarrito = () =>{
    setProductoGlobal(producto);
  }
  const agregarLista = () => {
    setProductoDeseosGlobal(producto);
  }

  return (
    <>
      <div style={{ maxWidth: '80%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <img src={producto.imagen} alt={producto.nombre} title={producto.nombre} style={{ width: '60%', maxWidth: '400px', borderRadius: '10px', marginBottom: '20px' }} />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{producto.nombre}</h1>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Autor:</strong> {producto.autor}</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Categoría:</strong> {producto.categoría}</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>Descripción Corta:</strong> {producto.descripcionCorta}</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{producto.descripcion}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '20px' }}>Precio: ${producto.precio}</p>
          <button onClick={agregarLista} style={{ padding: '1rem 2rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1.2rem', marginRight: '10px' }}>➕Favoritos</button>
          <button onClick={agregarCarrito} style={{ padding: '1rem 2rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '1.2rem' }}>➕Carrito</button>
        </div>
      </div>

      <Reseñas/>

    </>
  );
}

export default DetallesProducto;