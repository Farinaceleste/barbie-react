import "./CartWidget.css";
import Cart from "./cart.svg";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {  totalQuantity } = useContext(CartContext)

  return (
    <div>
      <Link className="menu-link" to="/cart">
            <img src={Cart} alt="cart"/>
            <span className="numerito">{totalQuantity()}</span>
        </Link>
    </div>

  )
}

export default CartWidget;
