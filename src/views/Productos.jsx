import React, { useState, useEffect } from 'react';
import TarjetaProducto from '../components/TarjetaProducto'


export default function Productos() {

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
            <div className='container'>
                <h2 className='mt-4'>Todos los productos</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {productos.map(producto => (
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
