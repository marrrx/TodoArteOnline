import React from "react";

function CardProductoCarrito(props) {
    return (
        <div class="d-flex flex-row mb-3">
            <div class="p-2">
                <img src={props.producto.imagen} alt={props.producto.nombre} title={props.producto.nombre} style={{width:100, height:100}}></img>
            </div>
            <div class="p-2">
                <p>{props.producto.nombre}</p>
            </div>
            <div class="p-2">
                <p>{props.producto.precio}</p>
            </div>
            <div class="p-2">
                <p>{props.producto.nombre}</p>
            </div>
            
        </div>
    )
}
export default CardProductoCarrito;