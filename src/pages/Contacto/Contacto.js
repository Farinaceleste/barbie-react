import "bulma/css/bulma.css";
import "./Contacto.css";


function Contacto() {
    return (

        <div className="form-contacto">
            <div className="field">
                <label className="label">Nombre y Apellido</label>
                <div className="control">
                    <input className="input" type="text" placeholder=""/>
                </div>
            </div>

            <div className="field">
                <label className="label">Nombre de usuario</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text"  />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                </div>
              
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                </div>
               
            </div>

            <div className="field">
                <label className="label">Escriba su mensaje</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Mensaje"></textarea>
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox"/>
                            Acepto los términos y condiciones
                    </label>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Enviar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Contacto;