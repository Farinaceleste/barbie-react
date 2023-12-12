import "./ItemDetail.css";
import Swal from 'sweetalert2'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, titulo, imagen, categoria, descripcion, precio, stock }) => {

    const alertaStock = () => {
        if (ItemCount > stock) {
            return (Swal.fire("Stock agotado!")
            )
        }
       
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
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripcion: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>

                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: ",)} />
                </footer>
            </section>
        </article>

    )


}

export default ItemDetail; 