import React, { useContext } from "react";
import { MyContext } from "../Context";
import CardProductoCarrito from "./CardProductoCarrito";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";




const Carrito = () => {
    const { productos } = useContext(MyContext);

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "8.99",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <>
            <div className="container" style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {productos.map((producto) => (<CardProductoCarrito key={producto.id}
                    producto={producto} />))}

                    
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                />

            </div>

        </>
    )
}
export default Carrito;