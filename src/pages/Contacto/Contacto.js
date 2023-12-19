import "bulma/css/bulma.css";
import "./Contacto.css";
import Swal from "sweetalert2";


function Contacto() {

    const aceptarContacto = () => {
        Swal.fire({
            title: "Mensaje enviado!",
            icon: "success"
          });
    }




    return (

        <div className="form-contacto">
         

            <div className="field">
                <label className="label">Nombre y apellido</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" aria-required="true" />
                </div>
            </div>

            <div className="field">
                <label className="label">Teléfono</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="phone-number" aria-required="true" />
                      
                </div>
              
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" aria-required="true" />
                    
                </div>
               
            </div>

            <div className="field">
                <label className="label">Escriba su mensaje</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Mensaje" aria-required="true"></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" aria-required="true"/>
                            Acepto los términos y condiciones
                    </label>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={aceptarContacto} className="button is-link">Enviar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Contacto;