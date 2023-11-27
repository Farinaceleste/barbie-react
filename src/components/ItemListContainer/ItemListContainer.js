import "./ItemListContainer.css";
import data from "../productos.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock";

function ItemListContainer() {
 let [productos, setProductos] = useState(data);
 let [selectedProduct, setSelectedProduct] = useState(null);


 const handleSelectProduct = (producto) => {
    setSelectedProduct (producto);
 }

 const handleClickSuma = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id) {
        return { ...producto, count: producto.count + 1 };
      }
      return producto;
    }));
 }

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

const {categoryId} = useParams ();

const [products, setProducts] = useState([]);

useEffect (() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
          setProducts (response)
      })
      .catch(error => {
        console.log (error)

        
      })
}, {categoryId})

 return (
    <div>
      <div className="card-producto">
        <div className="card-filtro">

          <h3>Filtrar</h3>
          <ul>
            <li>Barbie</li>
            <li>Ken</li>
          </ul>
        </div>
        {productos.map((producto, index) => {
          return (
            <div key={producto.id}>
              <article >
                <img className="card-image" src={producto.imagen} alt={producto.titulo} />
                <h4>{producto.titulo}</h4>
                <div className="detalle-card">
                 <p className="producto-precio">${producto.precio}</p>
                   <div className="product-add">
                    <button onClick={() => handleClickResta(producto.id)} >-</button>
                    <p>{producto.count}</p>
                    <button onClick={() => handleClickSuma(producto.id)} >+</button>
                 </div>
                 <button>Comprar</button>
                 
                </div>
                <div className="mas-card">
                <button onClick={() => handleSelectProduct(producto)}><Link to={`/productos/${producto.id}`}>Más detalles</Link></button>
                </div>

              </article>
            </div>
          )
        })}
      </div>
    </div >
 )
}
import { formToJSON } from "axios";

export default ItemListContainer;