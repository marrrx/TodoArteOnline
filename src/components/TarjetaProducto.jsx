
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { MyContext } from '../Context';
import swal from 'sweetalert';

function TarjetaProducto({ producto }) {
  const { setProductoDeseosGlobal, setProductoGlobal } = useContext(MyContext);




  const agregarCarrito = () => {
    setProductoGlobal(producto);
    swal({
      text: "Producto agregado al carrito",
      icon: "success"
    });  
  }

  const agregarLista = () => {
    setProductoDeseosGlobal(producto);
    swal({
      text: "Producto agregado a la lista de deseos",
      icon: "success"
    });   
   }
  return (
    <div className='shadow p-3 mb-5 mt-3 bg-body-secondary  rounded' style={{ width: '18rem', border: '1px solid #ccc' }}>
      <Link to={`/detalles-producto/${producto.id}`} title='Enlace al producto'>
        <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
      </Link>
      <div style={{ padding: '1rem' }}>
        <h1 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1.5rem' }}>{producto.nombre}</h1>
        <h2 style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1rem' }}>{producto.autor}</h2>
        <p style={{ margin: '0', marginBottom: '0.5rem' }}>{producto.descripcionCorta}</p>
        <p style={{ margin: '0', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>Precio: ${producto.precio}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary m-2" onClick={agregarCarrito} style={{ padding: '0.3rem 0.75rem', fontSize: '0.9rem', borderRadius: '0.25rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </button>
          <button className="btn btn-danger m-2" onClick={agregarLista} style={{ padding: '0.3rem 0.75rem', fontSize: '0.9rem', borderRadius: '0.25rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProducto;