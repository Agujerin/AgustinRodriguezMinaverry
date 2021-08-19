import ARM from "../assets/ARM.png"
import cat from "../assets/cat.png"
import linkedin from "../assets/linkedin.png"
import "./ARMabout.css"

export default function ARMabout({theme}){
    return(
        <section className="about-section">
            <h2>MI PERFIL</h2>
            <article className="about-article">
                <div className="flip-img">
                    <div className="flip-inner">
                    <div className="flip-front">
                            {(theme === "dark")? <img src={ARM} alt="foto"/>  
                            : <img src={cat} alt="foto"/>}
                        </div>
                        <div className="flip-back">
                            <a href="https://drive.google.com/uc?id=15uae5SZJSxPYNdrMPmN_C_uwJ4VZnCCq&export=download&authuser=0">DESCARGAR CV</a>
                        </div>
                    </div>
                </div>
                <div className="profile-data">
                    <ul className="profile-data-list">
                        <li><b>NOMBRE:</b> Agustín Rodríguez Minaverry</li>
                        <li><b>EDAD:</b> 36 años</li>
                        <li><b>RESIDENCIA:</b> Buenos Aires, Argentina</li>
                        <li><b>PROFESIÓN:</b> Desarrollador web front end </li>
                        <li><b>TECNOLOGÍAS:</b> React JS, Javascript, CSS y HTML</li>
                    </ul>
                </div>
            </article>
            <div className="about-history">
                <p><b>RESEÑA:</b> mi experiencia con los lenguajes de programación era prácticamente nula a principios de este año 2021. De hecho llegué a este apasionante mundo casi de casualidad, desde la lectura un libro sobre la "edad de oro del software español" en el que se cuenta la historia de muchos programadores autodidactas que llegaron a crear joyas como La abadía del crimen o Commandos.<br></br>
                Esa particular influencia me hizo descubrir que la programación no sólo es accesible a cualquiera que le pierda el miedo (y que le ponga dedicación), sino que además me ayudó a encontrar una vocación que creía que no tenía.<br></br>
                Como podrás ver terrícola, en mi CV hay experiencias laborales de lo más variadas y te aseguro que no llegué a ninguna de ellas a raíz de una vocación marcada de antemano. Sí puedo asegurar que cada una ayudó a formar a la persona que soy ahora, mi ética laboral y mis motivaciones.<br></br>
                Soy prolijo, detallista y me gustan las cosas simples, sin exagerado ornamento. Ese es el estilo que busco en mis proyectos.<br></br></p>
                <hr></hr>
                <p><b>APRENDIZAJE:</b> después de interiorizarme en los usos más comunes de los distintos lenguajes de programación decidí comenzar a aprender Javascript. Me atrajo la idea de su creación como amalgama de todo lo que estaba circulando en la web. Pero claro, primero debía conocer qué era eso del HTML y CSS.<br></br>
                El primer curso de YouTube que hice fue el de SoyDalto de HTML y de su mano vino el de CSS. Después, realizando prácticas del de Javascript básico, noté que necesitaba reforzar mis conocimientos de los dos primeros antes de adentrarme más en JS.<br></br>
                Allí descubrí los cursos de Dorian Designs, más específicos y detallados. Con una base más sólida fui alternando entre el curso de JS de Dorian, el de SoyDalto y las prácticas de cada uno.<br></br>
                También fui desarrollando algunos proyectos propios como "¿Dónde está Caricias?" o la "Calculadora de exposición" que podrás ver en la "GALERÍA DE TRABAJOS", que me ayudaron a fijar los conceptos que fui aprendiendo en los cursos.<br></br>
                Actualmente estoy siguiendo los cursos de React JS y Javascript de JonMircha, que es un purista de vanilla Javascript y que profundiza en los mecanismos básicos del lenguaje detrás de cada concepto de React.</p>
                <hr></hr>
                <p><b>CONOCIMIENTOS:</b> además de los cursos de HTML, CSS, Javascript y React JS en los que basé esta primera etapa de aprendizaje, también cuento en la actualidad con conocimientos de Git, Github y Responsive Design.</p>
            </div>
            <a className="linkedin-btn" href="https://ar.linkedin.com/in/agust%C3%ADn-rodr%C3%ADguez-minaverry-267445212" rel="noreferrer">
                <img src={linkedin} alt="linkedin"></img>
                Ver Perfil
            </a>
        </section>
    )
}