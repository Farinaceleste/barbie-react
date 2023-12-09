import "./NavBar.css";
import Logo from "./logo.png";
import React from "react";
// import "bulma/css/bulma.css";
import Cart from "./cart.svg";
import  {Link}  from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav className="navbar">
                <div className="imagen-logo-nav">
                    <a href="./"><img src={Logo} /></a>
                </div>
                <ul className="lista-nav">
                    <li> <Link to="./">Home</Link></li>
                    <li> <Link to ="/productos">Tienda</Link></li>
                    <li> <Link to ="/contacto">Contacto</Link></li>
                </ul>

                <div className="carrito-header">
                    <img className="container-cart-icon" src={Cart} alt="carrito" />
                    <span id="contador-productos" className="numerito">0</span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
