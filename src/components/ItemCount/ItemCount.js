import { useState } from "react";
import "./ItemCount.css";
import Swal from 'sweetalert2';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1)
        }
    }

    if (quantity > stock) {
        Swal.fire("Stock agotado!");
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <input type="number" value={quantity} readOnly/>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <button className="Button" onClick={() => onAdd (quantity)} disabled = {!stock}>
                Agregar al carrito
           
        </button>
        </div>
    )

    
}

export default ItemCount;