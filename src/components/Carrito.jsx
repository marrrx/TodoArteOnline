import React, { useContext } from "react";
import CardProductoCarrito from "./CardProductoCarrito";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { MyContext } from "../Context";




const Carrito = () => {
    const { productos, total } = useContext(MyContext);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value:`${total}`,
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <>
            <div className="container p-3" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <h2>Carrito</h2>
                <hr/>
                {productos.map((producto) => (<CardProductoCarrito key={producto.id} producto={producto} />))}

                <hr />

                <div className="m-3 "><h4>Total: ${total}</h4></div>

                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                    forceReRender={[total]}
                />

            </div>
        </>
    )
}
export default Carrito