import { NavLink } from "react-router-dom";
import "./ARMnavMenu.css"

export default function ARMasideNav(){
    return(
        <aside className="aside-nav-menu">
            <ul className="aside-nav-menu-list">
            <li><NavLink exact to="/" activeClassName="active-aside">INICIO</NavLink></li>
            <li><NavLink exact to="/about" activeClassName="active-aside">PERFIL</NavLink></li>
            <li><NavLink exact to="/projects" activeClassName="active-aside">GALERIA DE TRABAJOS</NavLink></li>
            <li><NavLink exact to="/contact" activeClassName="active-aside">CONTACTO</NavLink></li>
            </ul>
        </aside>
    )
}