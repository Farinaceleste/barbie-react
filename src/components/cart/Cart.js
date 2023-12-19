import "./Cart.css";
import Trash from "./trash.svg";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartitem/CartItem";
import React from "react";
import { useEffect, useRef, useState } from "react";

const Cart = () => {

    const { cart, clearCart, totalPrice, totalQuantity, removeItem } = useContext(CartContext);
    const [visibility, setVisibility] = useState({ icon: false, emptyMessage: true, empty: false });


    const iconRef = useRef(null);
    const emptyMessageRef = useRef(null);
    const emptyRef = useRef(null);

    const botonComprar = () => {
        clearCart();
        Swal.fire("Compra realizada con éxito!");
        updateVisibility();
    }

    
    const updateVisibility = () => {
        if (totalQuantity === 0) {
            setVisibility({ icon: false, emptyMessage: true, empty: false });
        } else {
            setVisibility({ icon: true, emptyMessage: false, empty: true });
        }
    }

    useEffect(() => {
        updateVisibility();
     }, [totalQuantity]);

    return (
        <div>
            <div className="card-checkout">

                {cart.map(p => (
                    <div key={p.id}>
                        <CartItem key={p.id} {...p} />
                        <button ref={iconRef} className="empty-icon" onClick={() => removeItem(p.id)}><img src={Trash} alt="trash" /></button>
                    </div>

                ))}
                <h3 style={{ visibility: visibility.emptyMessage ? "visible" : "hidden" }} id="empty-message" className="empty-message invisible">No hay productos en el carrito</h3>


                <hr />

            </div>
            <div className="botones-checkout">

                <div className="botones-derecha">
                <button style={{ visibility: visibility.empty ? "visible" : "hidden" }} ref={emptyRef} className="empty" onClick={() => botonComprar()}>Comprar</button>
                </div>
            </div>
            <div className="botones-izquierda">
                <button> <Link to="/producto:productoId" className="boton-volver">Volver</Link></button>
            </div>
        </div >

    )
}

export default Cart;
