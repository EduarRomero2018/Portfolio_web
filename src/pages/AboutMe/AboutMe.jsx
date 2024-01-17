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
              <p className="card-text secondary_title">Soy un Ingeniero de Sistemas apasionado por la tecnología, siempre enamorado del codigo, me gusta brindar soluciones a problemas de la vida real, siempre aplicando las mejores practicas de programación</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Article1
