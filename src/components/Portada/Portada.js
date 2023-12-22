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
                <div className="imagen-portada-div" >
                    <img className="imagen-portada" src={FotoPortada} alt="card-portada" />
                </div>
                <div className="texto-portada">
                    <h3>WE ARE</h3>
                    <img className="letra-logo" src={LetraLogo} alt="card-portada"/>
                </div>
            </div>
            <div className="cards-portada">
                <div className="card">
                    <img className="imagen-card" src={Carduno} alt="card-portada"/>
                    <p className="texto-card">TOP-RATED BARBIE GIFTS</p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Carddos} alt="card-portada"/>
                    <p className="texto-card">THE FUTURE IS PINK</p>
                </div>
                <div className="card">
                    <img className="imagen-card" src={Cardtres} alt="card-portada"/>
                    <p className="texto-card">YOU CAN BE EVERYTHING</p>
                </div>
            </div>
        </div>

    )
}

export default Portada;