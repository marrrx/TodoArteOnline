import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel'
import TarjetaProducto from '../components/TarjetaProducto'
export default function Inicio() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        import('../data/productos.json')
            .then(data => {
                setProductos(data.default);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

    return (
        <>
            <Carousel />
            <div className='container'>
                <h2 className='mt-4'>Novedades</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {productos.slice(0, 4).map(producto => (
                        <TarjetaProducto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}
