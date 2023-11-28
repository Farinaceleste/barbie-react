import "./ItemListContainer.css";
import data from "../productos";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';


function ItemListContainer() {
 let [productos, setProductos] = useState(data);
 let [selectedProduct, setSelectedProduct] = useState(null);


 const handleSelectProduct = (producto) => {
    setSelectedProduct (producto);
 }

 const handleClickSuma = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id) {
          if (producto.count < producto.stock){
            return { ...producto, count: producto.count + 1 };
          } else { Swal.fire("Stock agotado");
            return producto;
          }
        } else {
          return producto;
        }
      })
   );
  };

 const handleClickResta = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id) {
        if (producto.count > 0) {
          return { ...producto, count: producto.count - 1 };
        }
      }
      return producto;
    }));
 }



 return (
    <div>
      <div className="card-producto">
        <div className="card-filtro">

          <h3>Filtrar</h3>
          <ul>
            <li>Barbie</li>
            <li>Ken</li>
            <li>TODOS</li>
          </ul>
        </div>
        {productos.map((producto, index) => {
          return (
            <div key={producto.id}>
              <article >
                <img className="card-image" src={producto.imagen} alt={producto.titulo} />
                <h4>{producto.titulo}</h4>
                <div className="detalle-card">
                 <p className="producto-precio">Precio: ${producto.precio}</p>
                 <p>Stock disponible: {producto.stock}</p>
                   <div className="product-add">
                    <button onClick={() => handleClickResta(producto.id)} >-</button>
                    <p>{producto.count}</p>
                    <button onClick={() => handleClickSuma(producto.id)} >+</button>
                 </div>
                 <button onClick={()=> Swal.fire("Gracias por su compra!")}>COMPRAR</button>
                 
                </div>
                <div className="mas-card">
                <button className="boton-detalle" onClick={() => handleSelectProduct(producto)}><Link to={`/productos/${producto.id}`}>Más detalles</Link></button>
                </div>

              </article>
            </div>
          )
        })}
      </div>
    </div >
 )
}


export default ItemListContainer;