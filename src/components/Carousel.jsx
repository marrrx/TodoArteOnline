import React from 'react';
import productos from '/src/data/productos.json'
import {Link} from 'react-router-dom'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {productos.map((producto, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active bg-black ' : 'bg-black'}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner" >
                    {productos.map((producto, index) => (
                        <Link to={`/detalles-producto/${producto.id}`} title='Enlace al producto'>
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={producto.id} style={{ width: '100%', height: 500 }}>
                                <img src={producto.imagen} className="d-block w-100" alt={`Slide ${index + 1}`} title={producto.nombre} style={{ objectFit: 'cover', height: '100%' }} />
                            </div>
                        </Link>
                    ))}
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next  " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
