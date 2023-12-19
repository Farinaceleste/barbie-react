import "./CartWidget.css";
import Cart from "./cart.svg";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const CartWidget = () => {



  const { cart, setCart, totalQuantity } = useContext(CartContext)

  const clearCart = () => {
    setCart([]);
 };

  useEffect(() => {

  }, [cart]);


  return (
    <div>
      <a href ="/cart" className="CartWidget" >
        <img src={Cart} className="CartImg" alt="cart-widget" />  </a>
     
      <a href ="/cart" id="contador-productos" className="numerito">{totalQuantity()}</a>
    </div>

  )
}

export default CartWidget;
