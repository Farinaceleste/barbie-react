import "./User.css";
import Swal from "sweetalert2";

function User() {

 




    return (
        <div className="usuario-page">
            <h1>Sumate a nuestra comunidad!</h1>
            <div className="formulario-usuario">
                <input className="input"  placeholder="Ingrese su email" type="email" />
                <input className="input"  placeholder="Ingrese su contraseña" type="password" />
                <div className="b-y-c">
                    <input type="checkbox"/>
                    Acepto los términos y condiciones
                </div>
                <button>Enviar</button>
            </div>
        </div >
    )
}

export default User;
