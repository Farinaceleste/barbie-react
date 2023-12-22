import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({items}) => {

    if (!items) {
        return <h1>Loading...</h1>;
    }


    return (
        <div className="ListGroup">
            {items.map(prod => <Item key={prod.id} {...prod} titulo={prod.titulo} precio={prod.precio} imagen={prod.imagen}  />)}
        </div>
    )
}

export default ItemList;