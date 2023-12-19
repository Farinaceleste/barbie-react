import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { db } from "../config/firebase";
import { getDocs, collection, where, query } from "firebase/firestore";
import { NavLink, useParams } from "react-router-dom";
import wishlist from "../wishlist/WishList";


const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [wishlist, setWishlist] = useState([]);

  
  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
};

  useEffect(() => {
    setLoading(true)

    const CollectionRef = categoryId
      ? query(collection(db, "items"), where("categoria", "==", categoryId))
      : collection(db, "items")


    getDocs(CollectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);




  return (
    <div>
      <h1>PRODUCTOS </h1>
      <div className="org-tienda">
        <div className="Categorias">
          <h1>Filtrar</h1>
          <NavLink to={'/categoria/barbie'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Barbie</NavLink>
          <NavLink to={'/categoria/ken'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ken</NavLink>
          <NavLink to={'/producto:productoId'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ver todos</NavLink>
        </div>
        <section>
          <ItemList items={products} />
          <div className="App">
            <wishlist wishlist={wishlist} />
            <ItemList handleAddToWishlist={handleAddToWishlist} />
          </div>
        </section>

      </div>
    </div>
  )

}

export default ItemListContainer;

