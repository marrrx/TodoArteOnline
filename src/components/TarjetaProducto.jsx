
import React, {useContext} from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { MyContext } from '../Context';

function TarjetaProducto({producto}) {
  const { setProductoGlobal } = useContext(MyContext);


  

  const agregarCarrito = () =>{
    setProductoGlobal(producto);
  }
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '0.25rem', margin: '1rem', padding: '0.5rem' }}>
      <Link to={`/detalles-producto/${producto.id}`} title='Enlace al producto'>
      <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
      </Link>
      <div style={{ padding: '1rem' }}>
        <h1 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1.5rem'}}>{producto.nombre}</h1>
        <h2 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1rem' }}>{producto.autor}</h2>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{producto.descripcion}</p>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>${producto.precio}</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem' }}>Comprar</button>
        <button className="mt-2" onClick={agregarCarrito} style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '0.25rem' }}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default TarjetaProducto;