import "./NavBar.css";
import Logo from "./logo.png";
import React from "react";
import "bulma/css/bulma.css";
import Cart from "./cart.svg";
import { Link } from "react-router-dom";
import Heart from "./heart.svg";
import UserPhoto from "./user.svg";

function NavBar() {

    return (
        <div>
            <nav className="navbar">
                <div className="imagen-logo-nav">
                    <a href="./"><img src={Logo} /></a>
                </div>
                <ul className="lista-nav">
                    <li> <Link to="./">Home</Link></li>
                    <li> <Link to="/producto:productoId">Tienda</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                </ul>
                <div className="iconos-header">

                    <img className="container-cart-icon" src={Heart} alt="heart" />
                    <a href="/user" className="heart-icon"><img className="container-cart-icon" src={UserPhoto} alt="user" /></a>
                    <div className="container-cart-icon">
                        <a href="/checkout" className="cart-icon"><img src={Cart} alt="cart"/></a>
                        <span id="contador-productos" className="numerito">0</span>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;