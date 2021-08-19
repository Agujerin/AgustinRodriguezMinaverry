import "./ARMform.css"
import Loader from "./Loader"
import {useRef,useState} from "react"
import {useForm} from "../helpers/useForm.js"
import ARMmodal from "./ARMmodal"
import adventure from "../assets/adventure.png"

let initialForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const validations=(form,refName,refEmail,refSubject,refMessage)=>{
    let errors = {}
    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!form.name.trim()){
        errors.nameError = "Debe completar su nombre"
        refName.current.style.borderColor = "#ee2020"
        setTimeout(()=> refName.current.style.borderColor = "#56e543" ,1300)
    }else if (!nameRegex.test(form.name.trim())){
        errors.nameError = "Este campo solo acepta letras y espacios en blanco"
        refName.current.style.borderColor = "#ee2020"
        setTimeout(()=> refName.current.style.borderColor = "#56e543" ,1300)
    }

    if(!form.email.trim()){
        errors.emailError = "Debe completar su email"
        refEmail.current.style.borderColor = "#ee2020"
        setTimeout(()=> refEmail.current.style.borderColor = "#56e543" ,1300)
    }else if(!emailRegex.test(form.email.trim())){
        errors.emailError = "Debe ingresar un email válido"
        refEmail.current.style.borderColor = "#ee2020"
        setTimeout(()=> refEmail.current.style.borderColor = "#56e543" ,1300)
    }
    
    if(!form.subject.trim()){
        errors.subjectError = "Debe completar el asunto del mensaje"
        refSubject.current.style.borderColor = "#ee2020"
        setTimeout(()=> refSubject.current.style.borderColor = "#56e543" ,1300)
    }
    
    if(!form.message.trim()){
        errors.messageError = "Debe completar el mensaje"
        refMessage.current.style.borderColor = "#ee2020"
        setTimeout(()=> refMessage.current.style.borderColor = "#56e543" ,1300)
    }
    
    return errors
}


export default function ARMform(){
    const [info,setInfo] = useState(false)
    
    let refName = useRef()
    let refEmail = useRef()
    let refSubject = useRef()
    let refMessage = useRef()
      
    const {form,loader,response,egg,errors,handleChange,handleSubmit} = useForm(initialForm,validations,refName,refEmail,refSubject,refMessage)
    
    let {name,email,subject,message} = form
    let {nameError,emailError,subjectError,messageError} = errors
    
    const handleClick=()=>{
        setInfo(true)
        setTimeout(()=> setInfo(false), 3000)
    }
    
    return(
        <section>
            <h2>CONTACTO</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">NOMBRE</label>
                {nameError && <h5 className="error-text">{nameError} <i className="fas fa-exclamation-triangle error-icon"></i></h5>}
                {(info)
                ? <div className="info">
                    <ul>
                        <li>Todos los campos del formulario son obligatorios</li>    
                        <li>El campo "nombre" solo acepta letras y espacios en blanco</li>    
                        <li>El email debe ser válido (ej: pochoclo@gmail.com)</li>    
                        <li>El asunto y el mensaje no tienen límite de caracteres</li>    
                    </ul>
                </div>
                : <i className="fas fa-info-circle info-icon" onClick={handleClick}></i>}
                <input type="text" name="name" id="name" placeholder="Introduzca su nombre" value={name} ref={refName} onChange={handleChange}/>
                <label htmlFor="email">E - MAIL</label>
                {emailError && <h5 className="error-text">{emailError} <i className="fas fa-exclamation-triangle error-icon"></i></h5>}
                <input type="email" name="email" id="email" placeholder="Introduzca su email" value={email} ref={refEmail} onChange={handleChange}/>
                <label htmlFor="subject">ASUNTO</label>
                {subjectError && <h5 className="error-text">{subjectError} <i className="fas fa-exclamation-triangle error-icon"></i></h5>}
                <input type="text" name="subject" id="subject" placeholder="Asunto" value={subject} ref={refSubject} onChange={handleChange}/>
                <label htmlFor="message">MENSAJE</label>
                {messageError && <h5 className="error-text">{messageError} <i className="fas fa-exclamation-triangle error-icon"></i></h5>}
                <textarea rows="10" name="message" id="message" value={message} ref={refMessage} onChange={handleChange} placeholder="Mensaje..."></textarea>
                {(loader)? <Loader/> : <button type="submit">Enviar</button>}
            </form>
            <div className="links-container">
                <a href="https://www.instagram.com/agujerin/" rel="noreferrer" target="_blank" title="Mi Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/agustin.rodriguezminaverry.9/" rel="noreferrer" target="_blank" title="Mi Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://github.com/Agujerin" rel="noreferrer" target="_blank" title="Mi Github"><i className="fab fa-github"></i></a>
                <a href="https://ar.linkedin.com/in/agust%C3%ADn-rodr%C3%ADguez-minaverry-267445212" rel="noreferrer" target="_blank" title="Mi Linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
            {response &&
                <ARMmodal>
                    <p>{response}</p>
                </ARMmodal>}
            {egg &&
                <ARMmodal>
                    <h2>¡FELICITACIONES!</h2>
                    <img src={adventure} alt="adventure"></img>
                    <p>Tu premio por encontrar el Easter Egg es un mapa completo (INCONSEGUIBLE) para que puedas jugar y ganar el juego sensación de Atari: Adventure. ¡Qué lo disfrutes!</p>
                </ARMmodal>}
        </section>
    )
}