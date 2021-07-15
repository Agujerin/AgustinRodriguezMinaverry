import logo from "../assets/favicon-animado.ico"
import "./ARMfooter.css"
 
export default function ARMfooter(){
    return(
        <footer className="footer">
            <img src={logo} alt="logo"/>
            <p>Sitio web desarrollado por Agustín Rodríguez Minaverry con React JS</p>
        </footer>
    )
}