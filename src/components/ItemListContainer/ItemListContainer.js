import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../productos";
import ItemList from "../ItemList/ItemList";

import { NavLink, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncfunc = categoryId ? getProductsByCategory : getProducts
    asyncfunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId])


  return (
    <div>
      <h1>{greeting}</h1>
      <div class="org-tienda">
      <div className="Categorias">
        <h1>Filtrar</h1>
        <NavLink to={'/categoria/barbie'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Barbie</NavLink>
        <NavLink to={'/categoria/ken'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ken</NavLink>
        <NavLink to={'/categoria/todos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ver todos</NavLink>
      </div>
      <ItemList products={products} />
    </div>
</div>
  )

}

export default ItemListContainer;

