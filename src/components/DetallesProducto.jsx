import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos.json'; // Importa el JSON de productos
import { MyContext } from '../Context';
import Reseñas from './Reseñas';
import swal from 'sweetalert';

function DetallesProducto() {
  const { setProductoDeseosGlobal, setProductoGlobal } = useContext(MyContext);

  const { id } = useParams();
  const producto = productos.find(producto => producto.id === parseInt(id));
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const [activeTab, setActiveTab] = useState('descripcion-tab');

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
    });     }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  return (
    <>
      <div style={{ height: '100%' }}>
        <div className="container mt-5" style={{ maxWidth: '80%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={producto.imagen} alt={producto.nombre} title={producto.nombre} className="img-fluid" style={{ maxWidth: '400px', borderRadius: '10px', marginBottom: '20px' }} />
            </div>
            <div className="col-md-6">
              <h1 className='fs-1 mb-2'>{producto.nombre}</h1>
              <p className='fs-6 mb-2'>Autor: {producto.autor}</p>
              <p className='fs-6 mb-2'>Categoría: {producto.categoría}</p>
              <p className='fs-6 mb-5'>{producto.descripcionCorta}</p>
              <p className='fs-2 mb-5'>${producto.precio}</p>

              <button onClick={agregarLista} className="btn" style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginRight: '30px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg></button>
              <button onClick={agregarCarrito} className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Agregar al carrito</button>
              <p className='mt-3'>
                <ul id="myTab" role="tablist">
                  <span className='me-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </span>
                  <span className='me-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </span>
                  <span className='me-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </span>
                  <span className='me-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </span>
                  <span className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </span>
                  /
                  <text className='me-3 ms-3' type="button" id='reseñas-tab' data-bs-toggle="tab" data-bs-target="#reseñas-tab-pane" role='tab' aria-controls="reseñas-tab-pane" onClick={() => handleTabClick('reseñas-tab')}>Añadir una reseña</text>
                  /
                  <text className='me-3 ms-3' type="button" id='descripcion-tab' data-bs-toggle="tab" data-bs-target="#descripcion-tab-pane" role='tab' aria-controls="descripcion-tab-pane" onClick={() => handleTabClick('descripcion-tab')}>Ver descripción completa</text>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className={`nav-link ${activeTab === 'descripcion-tab' ? 'active' : ''}`} type="button" id='descripcion-tab' data-bs-toggle="tab" data-bs-target="#descripcion-tab-pane" role='tab' aria-controls="descripcion-tab-pane" onClick={() => handleTabClick('descripcion-tab')}>Ver descripción completa</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className={`nav-link ${activeTab === 'reseñas-tab' ? 'active' : ''}`} type="button" id='reseñas-tab' data-bs-toggle="tab" data-bs-target="#reseñas-tab-pane" role='tab' aria-controls="reseñas-tab-pane" onClick={() => handleTabClick('reseñas-tab')}>Añadir una reseña</button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className={`tab-pane fade ${activeTab === 'descripcion-tab' ? 'show active' : ''} m-5`} id="descripcion-tab-pane" role="tabpanel" aria-labelledby="descripcion-tab" tabIndex="0"><p className='fs-5 text-break mb-2'>{producto.descripcion}</p></div>
          <div className={`tab-pane fade ${activeTab === 'reseñas-tab' ? 'show active' : ''}`} id="reseñas-tab-pane" role="tabpanel" aria-labelledby="reseñas-tab" tabIndex="0"><Reseñas /></div>
        </div>
      </div>
    </>
  );
}

export default DetallesProducto;