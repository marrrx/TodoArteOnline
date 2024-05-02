import React, { useContext } from "react";
import { MyContext } from "../Context";
import CardProductoCarrito from "./CardProductoCarrito";




const Carrito = () => {
    const {productos} = useContext(MyContext);
    console.log(productos); 
    
    return <div>
    {productos.map((producto) => (<CardProductoCarrito key={producto.id}
    producto={producto}/>))}
    </div>
}
export default Carrito;