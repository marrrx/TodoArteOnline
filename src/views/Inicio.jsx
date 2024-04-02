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

            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {productos.map(producto => (
                    <TarjetaProducto
                        key={producto.id}
                        name={producto.nombre}
                        description={producto.descripcionCorta}
                        price={producto.precio}
                        img={producto.imagen}
                    />
                ))}
            </div>
        </>
    )
}
