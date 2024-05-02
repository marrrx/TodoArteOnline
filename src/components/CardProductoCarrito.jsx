import React from "react";

function CardProductoCarrito (props) {
    return <div>
        <img src={props.producto.imagen} alt={props.producto.nombre} title={props.producto.nombre}></img>
    </div>
}
export default CardProductoCarrito;