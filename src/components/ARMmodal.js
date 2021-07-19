import ReactDOM from "react-dom"
import "./ARMmodal.css"

const ARMmodal=({children})=>{
    const handleReload=()=> window.location.reload()
    
    return ReactDOM.createPortal(
        <div className="modal-portal">
            {children}
            <button onClick={handleReload}>OK</button>
        </div>, document.getElementById("modal")
    )
}

export default ARMmodal