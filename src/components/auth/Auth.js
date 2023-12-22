import "./Auth.css";
import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import x from "./x.svg";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import pinterest from "./pinterest.svg";
import google from "./google.svg";


function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)

        if (email === "" || password === "") {
            Swal.fire("Debe completar correctamente los campos")
        } else {
            await createUserWithEmailAndPassword(auth, email, password)
            Swal.fire("Registro exitoso!")
        }

    }
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    }

    const logOut = async () => {
        await signOut(auth);
        Swal.fire("Sesión cerrada exitosamente!")
    }


    return (
        <div className="usuario-page">
            <h1 className="sumate-titulo">Sumate a nuestra comunidad!</h1>
            <div className="auth-sumate">
                <div className="formulario-usuario">
                    <span>Bienvenido {auth?.currentUser?.email} !!</span>
                    <input className="input" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} type="email" />
                    <input className="input" placeholder="Ingrese su contraseña" onChange={(e) => setPassword(e.target.value)} type="password" />
                    <div className="b-y-c">
                        <input type="checkbox" />
                        Acepto los términos y condiciones
                    </div>
                    <div className="botones-ingresar">
                        <button type="button" className="btn btn-light" onClick={logOut}>Cerrar sesión</button>
                        <button type ="submit" className= "btn btn-light" onClick={signUp}>Registrate</button>
                    </div>
                    <button type="button" className="btn btn-light" onClick={signInWithGoogle}>Ingresar con <img src={google} alt="google" /></button>
                </div>
                <div className="menu-derecho">

                    <div className="redes">
                        <img src={instagram} alt="instagram" />
                        <img src={x} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className="datos-contacto">
                        <p>Lunes a viernes de 9 a 19 hrs.</p>
                        <p>(011) - 4444 - 8888</p>
                        <p>ayuda@barbiestore.com.ar</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth;
