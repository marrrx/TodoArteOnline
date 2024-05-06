import React from "react";

function CardProductoCarrito(props) {
    return (
        <div className="d-flex flex-row mb-3 justify-content-between align-items-center">
        <div className="p-2">
            <img src={props.producto.imagen} alt={props.producto.nombre} title={props.producto.nombre} style={{width:100, height:100}}></img>
        </div>
        <div className="p-2">
            <h5>{props.producto.nombre}</h5>
        </div>
        <div className="p-2">
            <h5>${props.producto.precio}</h5>
        </div>
    </div>
    
    )
}
export default CardProductoCarrito;