import './App.css'
import {useState} from "react"
import { HashRouter, Route, Switch } from 'react-router-dom'
import ARMnavMenu from "./components/ARMnavMenu"
import ARMasideNav from './components/ARMasideNav'
import ARMhome from './components/ARMhome'
import ARMfooter from './components/ARMfooter'
import error404 from "./assets/error404.png"
import ARMabout from './components/ARMabout'
import ARMprojects from './components/ARMprojects'
import ARMform from './components/ARMform'

let initialTheme = localStorage.getItem('userTheme') || "dark"

function App() {
  const [theme,setTheme] = useState(initialTheme)
  const [aside,setAside] = useState(false)
  
  const handleClick=(e)=>{ if (e.target.id !== "asideNavMenu" && aside) setAside(false)}
  
  return (
    <div className={`flex-container ${theme}`} onClick={handleClick}>
      <HashRouter>
        <ARMnavMenu theme={theme} setTheme={setTheme} aside={aside} setAside={setAside}/>
        {aside && <ARMasideNav aside={aside} setAside={setAside}/>}
        <Switch>
          <Route exact path="/" component={ARMhome}/>
          <Route exact path="/about">
            <ARMabout theme={theme}/>
          </Route>
          <Route exact path="/projects" component={ARMprojects}/>
          <Route exact path="/contact" component={ARMform}/>
          <Route path="*">
            <img src={error404} alt="error404" className="error404"></img>
            <h3>ERROR 404: La ruta seleccionada no existe</h3>
          </Route>
        </Switch>
      </HashRouter>
      <ARMfooter/>
    </div>
  )
}

export default App
