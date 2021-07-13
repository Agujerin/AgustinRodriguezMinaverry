import { NavLink } from "react-router-dom"
import "./ARMnavMenu.css"

export default function NavMenu({theme,setTheme,aside,setAside}){
    const handleCats=()=> setTheme("cats")
    const handleDark=()=> setTheme("dark")
    const handleOpenMenu=()=> aside? setAside(false) : setAside(true)
    
    return(
        <nav className="nav-menu">
            <i className="fas fa-bars nav-menu-bars" onClick={handleOpenMenu}></i>
            <h3 className="nav-menu-title">Agustín Rodríguez Minaverry</h3>
            <NavLink exact to="/" activeClassName="active">INICIO</NavLink>
            <NavLink exact to="/about" activeClassName="active">PERFIL</NavLink>
            <NavLink exact to="/projects" activeClassName="active">GALERIA DE TRABAJOS</NavLink>
            <NavLink exact to="/contact" activeClassName="active">CONTACTO</NavLink>
            {(theme === "dark")?<i className="fas fa-cat" onClick={handleCats}></i>:<i className="fas fa-moon" onClick={handleDark}></i>}
        </nav>
    )
}