import Logo from "./logo.png";
import "./Footer.css";


function Footer() {
    return (
        <div>
            <footer>
                <div className="footer">
                    <img className="imagen-logo" src={Logo} />
                    <div className="primera-fila-footer">
                        <strong>CONTACTO</strong>
                        <hr/>
                        <ul>
                            
                            <li> Preguntas frecuentes</li>
                            <li>Servicio al cliente</li>
                            <li>Av. Lincoln 123</li>
                            <li>(011)-1111-3333</li>
                        </ul>
                    </div>
                    <div className="segunda-fila-footer">
                        <strong>COMPRAS</strong>
                         <hr/>
                        <ul>
                           
                            <li> Medios de pago</li>
                            <li>Promociones </li>
                            <li>Venta corporativa</li>
                            <li>Plazo y costos de entrega</li>
                        </ul>
                    </div>
                    <div className="tercera-fila-footer">
                        <strong>LEGALES</strong>
                        <hr/>
                        <ul>
                            
                            <li> Defensa del Consumidor</li>
                            <li>Politicas de privacidad</li>
                            <li>Cambios y devoluciones</li>
                            <li>Reclamos</li>
                        </ul>
                    </div>
                    <div class="redes">
                <a href="https://www.facebook.com/"><i className="bi bi-facebook fb"></i></a>
                <a href="https://www.twitter.com/"><i className="bi bi-twitter tw"></i></a>
                <a href="https://www.insagram.com/"><i className="bi bi-instagram ig"></i></a>
                <a href="https://ar.pinterest.com/"><i class="bi bi-pinterest pi"></i></a>
                <a href="https://www.linkedin.com/"><i className="bi bi-linkedin li"></i></a>
            </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
