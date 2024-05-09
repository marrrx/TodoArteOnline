import React, { useContext } from "react";
import { MyContext } from "../Context";
import CardProductoDeseos from "./CardProductoDeseos";




const ListaDeseos = () => {

    const { productosDeseos } = useContext(MyContext);

console.log(productosDeseos)

    return (
        <>
            <div className="container p-3 " style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <h2>Lista de deseos</h2>
                <hr/>
                {productosDeseos.map((producto) => (<CardProductoDeseos key={producto.id} producto={producto} />))}
            </div>
        </>
    )
}
export default ListaDeseos