import React from 'react'
import "./stylosAboutMe.css";

// import valores from '../../Images/Nuestros Valores.webp';
import user from "../../assets/images/user.png";
import { BsFillBookmarkCheckFill} from "react-icons/bs";


const Article1 = () => {

  return (
    <>

      <div className="container ">
        <div className="row text-center justify-content-center align-content-center">

          <div className="col-sm-7">
            <div className="card-body style_border1">
              {/* <span className='styles_icon'><BsFillBookmarkCheckFill /></span> */}
              <h5 className="card-title">Sobre mi</h5>
              <p className="card-text secondary_title">¡Hola! Soy un <span className='styles_span'>ingeniero de sistemas</span> con una formación en <span className='styles_span'>desarrollo web FullStack,</span> apasionado en todo lo que hago, dispuesto siempre a enfrentar desafíos, amante de todo lo que indica, <span className='styles_span'>transformación digital</span> y <span className='styles_span'>accesibilidad</span> para lograr una verdadera inclusión. ¿Mi punto único? La versatilidad: lo que me ha impulsado para adaptarme a los entornos de trabajo.</p>
            </div>
          </div>

          <div className="col-sm-5">
            <figure>
              <img src={user} alt="" className="styles_img "/>
            </figure>
          </div>

        </div>
      </div>
    </>
  )
}
export default Article1
