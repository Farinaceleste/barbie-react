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
                    <div className="nuevo" key={p.id}>
                        <CartItem key={p.id} {...p} />
                        <button ref={iconRef} className="empty-icon" onClick={() => removeItem(p.id)}><img src={Trash} alt="trash" /></button>
                    </div>

                ))}
                <h3 style={{ visibility: visibility.emptyMessage ? "visible" : "hidden" }} id="empty-message" className="empty-message invisible">No hay productos en el carrito</h3>


                <hr />

            </div>
            <hr />
            <div className="botones-checkout">

                <button> <Link to="/producto:productoId" className="boton-cart">Volver</Link></button>
                <button> <Link to="/checkout" className="boton-cart"> Checkout </Link></button>

            </div>
        </div >

    )
}

export default Cart;
