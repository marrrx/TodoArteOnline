import React, { useState, useEffect } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [ordenPrecio, setOrdenPrecio] = useState('asc');
    const [ordenAlfabetico, setOrdenAlfabetico] = useState('asc');

    useEffect(() => {
        import('../data/productos.json')
            .then(data => {
                setProductos(data.default);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

    const filtrarPorNombre = nombre => {
        setFiltroNombre(nombre);
    };

    const handleOrdenPrecioChange = e => {
        setOrdenPrecio(e.target.value);
    };

    const handleOrdenAlfabeticoChange = e => {
        setOrdenAlfabetico(e.target.value);
    };

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );

    const productosOrdenadosPrecio = [...productosFiltrados].sort((a, b) => {
        const precioA = parseFloat(a.precio);
        const precioB = parseFloat(b.precio);
        return ordenPrecio === 'asc' ? precioA - precioB : precioB - precioA;
    });

    const productosOrdenadosAlfabetico = [...productosFiltrados].sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        return ordenAlfabetico === 'asc' ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
    });

    return (
        <>
            <div className='container'>
                <h2 className='mt-4'>Todos los productos</h2>
                <div>
                    <input
                        type='text'
                        placeholder='Filtrar por nombre...'
                        value={filtroNombre}
                        onChange={e => filtrarPorNombre(e.target.value)}
                    />
                    <select value={ordenPrecio} onChange={handleOrdenPrecioChange}>
                        <option value='asc'>Precio ascendente</option>
                        <option value='desc'>Precio descendente</option>
                    </select>
                    <select value={ordenAlfabetico} onChange={handleOrdenAlfabeticoChange}>
                        <option value='asc'>Orden alfabético A-Z</option>
                        <option value='desc'>Orden alfabético Z-A</option>
                    </select>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {ordenPrecio === 'asc' ? productosOrdenadosPrecio.map(producto => (
                        <TarjetaProducto
                            key={producto.id}
                            producto={producto}
                        />
                    )) : productosOrdenadosAlfabetico.map(producto => (
                        <TarjetaProducto
                            key={producto.id}
                            producto={producto}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
