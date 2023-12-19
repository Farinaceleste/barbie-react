import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, titulo, imagen, categoria, descripcion, precio, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, titulo, precio, imagen
        }

        addItem (item, quantity)
    }

    return (
        <article className="CardItem2">
            <header className="Header">
                <h1 className="ItemHeader">
                    {titulo}
                </h1>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg" />
            </picture>
            <section>
              
                <p className="Info">
                   {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>

                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to={"/cart"} className="Option">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </section>
        </article>
    )


}

export default ItemDetail; 