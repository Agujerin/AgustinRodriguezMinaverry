import './App.css';
import {useState} from "react"
import { HashRouter, Route, Switch } from 'react-router-dom'
import ARMnavMenu from "./components/ARMnavMenu"
import ARMasideNav from './components/ARMasideNav'
import ARMhome from './components/ARMhome';
// import ARMfooter from './components/ARMfooter';

function App() {
  const [theme,setTheme] = useState("dark")
  const [aside,setAside] = useState(false)
  
  return (
    <main className={`flex-container ${theme}`}>
      <HashRouter>
        <ARMnavMenu theme={theme} setTheme={setTheme} aside={aside} setAside={setAside} />
        {aside && <ARMasideNav />}
        <Switch>
          <Route exact path="/" component={ARMhome} />
          <Route exact path="/about" />
          <Route exact path="/projects" />
          <Route exact path="/contact" />
          <Route path="*">
            <img src="./assets/error404.png" alt="error404"></img>
            <h3>ERROR 404: La ruta seleccionada no existe</h3>
          </Route>
        </Switch>
      </HashRouter>
      {/* <ARMfooter /> */}
      <h1>holi</h1>
      <h1>holi</h1>
      <h1>holi</h1>
      <h1>holi</h1>
      <h1>holi</h1>
      <h1>holi</h1>
    </main>
  );
}

export default App;
