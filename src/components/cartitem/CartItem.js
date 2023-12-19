import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../context/CartContext";
import item from "../Item/Item";

const CartItem = ({ imagen, titulo, precio, quantity, id }) => {


    return (

        <div>

            <div className="checkout-items">
                <div class="org-cart">
                    <img src={imagen} alt={id} className="imagen-cartitem"/>
                </div>
                <div class="org-cart">

                    <h2 className="titulos-cart">Producto</h2>
                    <p >{titulo}</p>
                </div>
                <div class="org-cart">
                    <h2 className="titulos-cart">Cantidad</h2>
                    <p>{quantity}</p>
                </div>
                <div class="org-cart">
                    <h2 className="titulos-cart">Subtotal</h2>
                    <p>$ {precio}</p>
                </div>
                <div class="org-cart">
                    <h2 className="titulos-cart">TOTAL</h2>
                    <p>$ {quantity * precio}</p>
                </div>
            </div>


        </div>
    )
}

export default CartItem;

