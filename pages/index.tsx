
import estilos from "../styles/styles.module.css"


function HolaMundo() {


    return (
        <>
            <div className={estilos.bodyContainer}>
                <NavBar />
                <SkillsContainer />
                <AboutMe />
                
                <Footer />
            </div>

        </>
    )

}


interface CajitaProps {
    titulo: string,
    texto: string
}



function Skill(props: CajitaProps) {
    return (<div className={estilos.cajitaFunciones}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" width={40} height={40} />
        <h2> {props.titulo}</h2>
        <p>{props.texto}</p>
    </div>)
}


function SkillsContainer() {

    return (
        <>
            <div id={"misHabilidades"} className={estilos.padre}>
                <h2>Mis Habilidades</h2>
                <span>En que me destaco </span>
                <div id={"adads"} className={estilos.skillsContainer} >
                    <Skill titulo={"Recursividad"} texto={"Capaz de encontrar la manera de solucionar problemas sin importar la situación."} />
                    <Skill titulo={"Autónomo"} texto={"Autoaprendizaje de manera constante de acuerdo a las necesidades del negocio para cumplir con objetivos establecidos."} />
                    <Skill titulo={"Trabajo en equipo"} texto={"Desarrollo de proyectos con multiples compañeros de trabajo de una manera eficaz."} />
                    <Skill titulo={"Constante Mejora"} texto={"Busco siempre optimizar y mejorar mis resultados para darles un valor agregado y superar las expectativas del cliente"} />

                </div>
            </div>
        </>
    )
}



function AboutMe() {

    return (
        <div id={"aboutMe"} className={estilos.aboutMeContainer}>
            <div className={estilos.aboutMe}>
                <h2 className={estilos.aboutMeTitle}>Perfil profesional</h2>
                <p>Mi nombre es Andres Guillermo Toloza Guzmán. Actualmente tengo 20 años y soy estudiante de ingenieria de sistemas en 5to semestre en la Universidad de Antioquia. Tengo experiencia en el área de la programación.
                    Principalmente me destaco por tener conocimientos en <span className={estilos.aboutMeKnowledge}>algoritmos, estructuras de datos, bases de datos</span>  y demás.
                    El lenguaje de programación que uso principalmente en mi actual labor es <span className={estilos.aboutMeKnowledge}>Python </span> junto con SQL Server , con el que me encargo de automatizar procesos y manipular bases de datos con pandas. junto con <span className={estilos.aboutMeKnowledge}> Postman</span> en testeo de APIs.
                    Actualmente estoy retomando el desarrollo web con <span className={estilos.aboutMeKnowledge}>Java y JavaScript</span> además de nuevos frameworks como <span className={estilos.aboutMeKnowledge}>Spring y React</span>. </p>
                <p>Por la parte personal, soy una persona proactiva que disfruta la programación.
                    Alguien que <span className={estilos.aboutMeKnowledge}> nunca se rinde en los objetivos</span> que tiene y además, que busca la manera de solucionar los problemas que se presenten tanto en lo laboral como en lo personal siendo <span className={estilos.aboutMeKnowledge}> recusivo y amable </span>
                    También tengo capacidades de <span className={estilos.aboutMeKnowledge}>trabajo en equipo y bajo presión</span>, esto debido a que actualmente trabajo en un área que se encarga del sector del ecommerce dentro de una compañía reconocida, por lo que la agilidad y presión me han hecho una persona que se adapta a las situaciones que se puedan llegar a presentar día a día.</p>
                <p>Finalmente, soy alguien que <span className={estilos.aboutMeKnowledge}>se compromete con su responsabilidad y da lo mejor de si mismo</span> para afrontar los nuevos retos que se me puedan presentar, aprendiendo de manera constante y rapida para dar un valor agregado al cliente.</p>

                <a href="https://drive.google.com/file/d/1DcjGepaM2j5mylwITbgOAqCE804S5kC1/view?usp=share_link" className={estilos.aboutMeCV} target="_blank" rel="noopener noreferrer">
                    Descarga mi CV
                    <img src="http://www.elcom.eu/public/themes/images/svg/arrow-down.svg" width={30} height={30} />
                </a>

            </div>



            <div className={estilos.aboutMeImages}>
                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" width={100} height={100} />
                <img src="https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png" width={100} height={100} />
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width={100} height={100} />
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" width={100} height={100} />
                <img src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png" width={100} height={100} />
                <img src="https://img.icons8.com/color/480/microsoft-sql-server.png" width={100} height={100} />
            </div>


        </div>

    )

}


function NavBar() {
    return (
        <div className={estilos.navBar}>
            <h3>Andres Toloza</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Breadcrumb_left_separator.svg/431px-Breadcrumb_left_separator.svg.png" width={30} height={30} />
            <div className={estilos.navBarSectionContent}>
                <a href="#" className={estilos.navBarSection}>Inicio</a>
                <a href="#misHabilidades" className={estilos.navBarSection}>Mis habilidades</a>
                <a href="#aboutMe" className={estilos.navBarSection}>Acerca de mi</a>
                <a href="#contact" className={estilos.navBarSection}>Contacto</a>
            </div>

        </div>


    )
}




function Footer() {
    return (
        <footer>
            <div className={estilos.footerContainer}>
                <div className={estilos.footerDescription}>
                    <h1>Andres Toloza</h1>
                    <p>Soy Andres Guillermo Toloza Guzman, proximamante programador Full Stack. Estoy presto para servirte con cualquier necesidad </p>
                    <p></p>
                    <p>©2022. Todos los derechos reservados.</p>
                </div>

                <div className={estilos.footerNavigation}>
                    <h1>Navegación</h1>
                    <a href="#">Inicio</a>
                    <a href="#misHabilidades">Mis habilidades</a>
                    <a href="#aboutMe">Acerca de mi</a>
                    <a href="#contact">Contacto</a>
                </div>

                <div id={"contact"} className={estilos.footerNavigation}>
                    <h1>Contacto</h1>
                    <div className={estilos.footerContact}>
                        <a href="#" className={estilos.footerContactText} > <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width={15} height={15} /> LinkedIn</a>
                        <a href="#misHabilidades" className={estilos.footerContactText}><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width={15} height={15} /> GitHub</a>
                        <a href="#aboutMe" className={estilos.footerContactText}><img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" width={15} height={15} /> Ingles C1</a>
                        <a href="#contact" className={estilos.footerContactText}><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width={15} height={15} /> Correo</a>
                    </div>

                </div>
            </div>

        </footer>


    )
}



export default HolaMundo

