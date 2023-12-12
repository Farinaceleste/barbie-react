import "./Checkout.css";
import Trash from "./trash.svg";
import Swal from 'sweetalert2'

function Checkout() {


    const botonComprar = () => {
        Swal.fire("Compra realizada con éxito!");
    }



    
    return (
        <div>
            <div className="card-checkout">
                <div>
                    <h3>Producto</h3>
                    <hr />
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Cantidad</h3>
                    <hr />
                    <p>1</p>
                </div>
                <div>
                    <h3>Precio x Unidad: </h3>
                    <hr />
                    <p>$ 50</p>
                </div>
                <div>
                    <h3>Precio Total: </h3>
                    <hr />
                    <p>$ 50</p>
                </div>
                <div>
                    <img src={Trash} alt="trash" />
                </div>
            </div>
            <div className="botones-checkout">
                <div className="botones-izquierda">
                    <button>Volver</button>
                </div>
                <div className="botones-derecha">
                    <button onClick={botonComprar}>Comprar</button>
                    <button>Eliminar carrito</button>
                </div>
            </div>
        </div >

    )
}

export default Checkout;
