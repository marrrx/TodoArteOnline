import React, { useState, useEffect, useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto'
import { MyContext } from '../Context';

export default function Productos() {
    const { search } = useContext(MyContext);
    const [productos, setProductos] = useState([]);
    const [orden, setOrden] = useState({ type: 'precio', direction: 'asc' });

    useEffect(() => {
        import('../data/productos.json')
            .then(data => {
                setProductos(data.default);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    }, []);

    const handleOrdenChange = e => {
        const value = e.target.value;
        const [type, direction] = value.split('-');
        setOrden({ type, direction });
    };

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const ordenarProductos = (a, b) => {
        if (orden.type === 'precio') {
            const precioA = parseFloat(a.precio);
            const precioB = parseFloat(b.precio);
            return orden.direction === 'asc' ? precioA - precioB : precioB - precioA;
        } else if (orden.type === 'alfabetico') {
            const nombreA = a.nombre.toLowerCase();
            const nombreB = b.nombre.toLowerCase();
            return orden.direction === 'asc' ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
        }
        return 0;
    };

    const productosOrdenados = [...productosFiltrados].sort(ordenarProductos);

    return (
        <>
            <div className='container'>
                <h2 className='mt-4'>Todos los productos</h2>
                <div style={{ marginBottom: '10px' }}>
                    <span>Ordenar por: </span>
                    <select value={`${orden.type}-${orden.direction}`} onChange={handleOrdenChange} style={{ backgroundColor: 'white', color: 'black' }}>
                        <option value='precio-asc'>Precio ascendente</option>
                        <option value='precio-desc'>Precio descendente</option>
                        <option value='alfabetico-asc'>Orden alfabético A-Z</option>
                        <option value='alfabetico-desc'>Orden alfabético Z-A</option>
                    </select>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {productosOrdenados.map(producto => (
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
