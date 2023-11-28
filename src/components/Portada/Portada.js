import "./Portada.css";
import LetraLogo from "./logo-letra.png";
import FotoPortada from "./foto-portada.jpg";
import Carduno from "./barbie7.jpg";
import Carddos from "./barbie8.jpg";
import Cardtres from "./barbie10.jpg";
import { Link } from "react-router-dom";

function Portada() {
    return (
        <div>
            <div className="portada">
                <div className="imagen-portada">
                    <img src={FotoPortada} />
                </div>
                <div className="texto-portada">
                    <h3>WE ARE</h3>
                    <img className="letra-logo" src={LetraLogo} />
                </div>
            </div>
            <div className="cards-portada">
                <div className="card">
                    <img className="imagen-card" src={Carduno}/>
                    <p className="texto-card"><Link to ="/productos">TOP-RATED BARBIE GIFTS</Link></p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Carddos}/>
                    <p className="texto-card"><Link to ="/productos">THE FUTURE IS PINK</Link></p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Cardtres}/>
                    <p className="texto-card"><Link to ="/productos">YOU CAN BE EVERYTHING</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Portada;