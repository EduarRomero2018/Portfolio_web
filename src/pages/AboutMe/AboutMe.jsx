import React from 'react'
import "./stylosAboutMe.css";

// import valores from '../../Images/Nuestros Valores.webp';
import user from "../../assets/images/user.png";
import { BsFillBookmarkCheckFill} from "react-icons/bs";


const Article1 = () => {

  return (
    <>

      <div className="container">
        <div className="row text-center justify-content-center align-content-center">
          <div className="col-sm-5">
            <figure>
              <img src={user} alt="" className="styles_img "/>
            </figure>
          </div>

          <div className="col-sm-7 justify-content-center align-content-start">
            <div className="card-body style_border1">
              {/* <span className='styles_icon'><BsFillBookmarkCheckFill /></span> */}
              <h5 className="card-title">About Me</h5>
              <p className="card-text secondary_title">¡Hola! Soy [Eduardo Romero], un apasionado Ingeniero de Sistemas con una formación en desarrollo web FullStack. Mi trayectoria profesional se ha centrado en la ingeniería de sistemas, donde he adquirido habilidades técnicas y experiencia en telecomunicaciones y redes, administración de servidores, experiencia en Ingeniería de Software, he ejercido en proyectos orientados al desarrollo de software utilizando tecnologías como html, css, javascript, bootstraps, materialize, tailwind, react+vite, node js, php, bases de datos relacionales (SQL, MYSQL), base de datos no relacionales (MongoDB, Firebase), y consumo de servicios Rest. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Article1
