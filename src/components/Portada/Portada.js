import "./Portada.css";
import LetraLogo from "./logo-letra.png";
import FotoPortada from "./foto-portada.jpg";
import Carduno from "./barbie7.jpg";
import Carddos from "./barbie8.jpg";
import Cardtres from "./barbie10.jpg";

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
                    <p className="texto-card">TOP-RATED BARBIE GIFTS</p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Carddos}/>
                    <p className="texto-card">THE FUTURE IS PINK</p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Cardtres}/>
                    <p className="texto-card">YOU CAN BE EVERYTHING</p>
                </div>
            </div>
        </div>

    )
}

export default Portada;