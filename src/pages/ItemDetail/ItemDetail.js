

import { Link, useParams } from "react-router-dom";
import data from "../../components/productos.json";
import "./ItemDetail.css";

function ItemDetail() {
  const { productoId } = useParams();


  const producto = data.find((producto) => productoId == producto.id);

  const { titulo, imagen, precio } = producto;

  return (
    <div>
      
      <div className="card-detail">
        <img className="image-detail" src={imagen} />
        <h2>{titulo}</h2>
        <span>${precio}</span>
        <p>
          ¡Las muñecas Barbie Profesiones animan a las niñas a soñar a lo grande y a apuntar alto! Cada muñeca puede alcanzar sus objetivos luciendo un conjunto profesional con accesorios para representar momentos en el trabajo. Hay un montón de carreras profesionales para descubrir. Coge el micrófono y sal al escenario con la muñeca Barbie Cantante. Luce un conjunto que la hará brillar en el escenario y viene con un micrófono y un pie de micrófono. Además, ¡su largo pelo rosa es perfecto para llamar la atención del público! Descubre y colecciona todas las muñecas y juguetes Barbie Profesiones, porque cuando una niña juega con Barbie, ¡imagina todo lo que puede ser de mayor!
        </p>
        <div className="botones-detalle">
          <Link to="/productos" className="boton-volver">Volver</Link>
          <button className="boton-comprar">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;