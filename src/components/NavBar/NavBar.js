import "./NavBar.css";
import Logo from "./logo.png";
import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import UserPhoto from "./user.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartWidget from "../CartWidget/CartWidget";




function NavBar() {

    const { totalQuantity } = useContext(CartContext)
    const result = totalQuantity;

    return (
        <div>
            <nav className="navbar">
                <div className="imagen-logo-nav">
                    <a href="./"><img src={Logo} alt="logo" /></a>
                </div>
                <ul className="lista-nav">
                    <li> <Link to="./" className="item-navbar">Home</Link></li>
                    <li> <Link to="/producto:productoId" className="item-navbar">Tienda</Link></li>
                    <li> <Link to="/contacto" className="item-navbar">Contacto</Link></li>
                </ul>
                <div className="iconos-header">

                  
                    <a href="/auth" ><img className="container-cart-icon" src={UserPhoto} alt="user" /></a>
                    <div className="container-cart-icon">
                      <CartWidget/>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;