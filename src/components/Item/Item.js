import { Link } from "react-router-dom";
import "./Item.css";
import { useState } from "react";


const Item = ({ id, titulo, imagen, precio, stock}) => {

 

    return (
        <div className="card-item">
            <article className="CardItem">
                <header className="header">
                    <h2 className="ItemHeader">
                        {titulo}
                        
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                     ${precio}
                </p>
                <p className="Info">
                    En stock: {stock}
                </p>

                <footer className="Itemfooter">
                    <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>

                </footer>
            </section>
        </article>
        </div >

    )
}

export default Item;