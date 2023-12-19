import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({items, handleAddToWishlist }) => {

    if (!items) {
        return <h1>Loading...</h1>;
    }


    return (
        <div className="ListGroup">
            {items.map(prod => <Item key={prod.id} {...prod} handleAddToWishlist={handleAddToWishlist} />)}
        </div>
    )
}

export default ItemList;