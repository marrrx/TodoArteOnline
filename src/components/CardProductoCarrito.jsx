import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context";

function CardProductoCarrito(props) {
    const navigate = useNavigate();
    const { setProductos, productos } = useContext(MyContext);

    const handleProductos = () => {
        navigate(`/detalles-producto/${props.producto.id}`);
    };

    const eliminarProducto = (id) => {
        const nuevaLista = productos.filter(producto => producto.id !== id);
        setProductos(nuevaLista);
    };
    return (
        <div className="d-flex flex-row mb-3 justify-content-between align-items-center">
        <div className="p-2" onClick={handleProductos}>
            <img src={props.producto.imagen} alt={props.producto.nombre} title={props.producto.nombre} style={{width:100, height:100}}></img>
        </div>
        <div className="p-2" onClick={handleProductos}>
            <h5>{props.producto.nombre}</h5>
        </div>
        <div className="p-2">
            <h5>${props.producto.precio}</h5>
        </div>
        <div className="p-2">
                    <button className="btn" onClick={() => eliminarProducto(props.producto.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </button>
                </div>
    </div>
    
    )
}
export default CardProductoCarrito;