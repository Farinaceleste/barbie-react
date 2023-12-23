import "./Cart.css";
import Trash from "./trash.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartitem/CartItem";
import React from "react";
import { useEffect,  useState } from "react";

const Cart = () => {

    const { cart, clearCart, totalPrice, totalQuantity, removeItem } = useContext(CartContext);
    const [emptyMessageVisibility, setEmptyMessageVisibility] = useState(false);


    useEffect(() => {
        setEmptyMessageVisibility(totalQuantity === 0);
    }, [totalQuantity]);

   

    return (
        <div>
            <div className="card-checkout">

                {cart.map(p => (
                    <div className="nuevo" key={p.id}>
                        <CartItem key={p.id} {...p} />
                        <button className="empty-icon" onClick={() => { clearCart(); }}><img src={Trash} alt="trash" /></button>
                    </div>

                ))}
                <h3 className={emptyMessageVisibility ? "empty-message" : "visible"} id="empty-message">No hay productos en el carrito</h3>


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