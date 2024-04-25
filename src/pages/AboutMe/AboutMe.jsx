import React from 'react'
import "./stylosAboutMe.css";

// import valores from '../../Images/Nuestros Valores.webp';
import developer from "../../assets/images/user.png";
import Metas from "../../assets/images/Reloj-back.png";
import Hija from "../../assets/images/Hija-back.png";
import { BsFillBookmarkCheckFill } from "react-icons/bs";


const Article1 = () => {

  return (
    <>
      <div className="container">
        <div className="row text-center justify-content-center align-content-center">


          <div className="col-sm-5">
            <figure className=''>
              <img src={developer} alt="developer" className="styles_img" />
            </figure>
            <svgdeveloper></svgdeveloper>

          </div>

          <div className="col-sm-7">
            <div className="card-body style_border1">
              {/* <span className='styles_icon'><BsFillBookmarkCheckFill /></span> */}
              <h5 className="card-title">Sobre mi</h5>
              <p className="card-text secondary_title">

              "Soy una persona que valora sinceramente las relaciones humanas y la autenticidad en la interacción con los demás.<span className='styles_span'>Me destaco por mi honestidad y mi respeto hacia los demás.</span> Pueden contar conmigo para brindar apoyo y estar disponible cuando lo requieran, ya que considero que el <span className='styles_span'>respeto y la solidaridad </span>son fundamentales en cualquier relación."
              </p>
            </div>
          </div>


          <div className="col-sm-7">
            <div className="card-body style_border2">
              {/* <span className='styles_icon'><BsFillBookmarkCheckFill /></span> */}
              <h5 className="card-title">Iniciativas a corto plazo</h5>
<ul className='styles_ul'>
  <li>Especialización en Desarrollo de Bases de Datos (Junio-2024)</li>
  <li>Estudiar Ingles (2025)</li>
  <li>Certificado en AWS</li>
</ul>
            </div>
          </div>

          <div className="col-sm-5">
            <figure className=''>
              <img src={Metas} alt="developer" className="styles_img" />
            </figure>
            <svgdeveloper></svgdeveloper>

          </div>



        </div>

        <div className="row text-center justify-content-center align-content-center">
          <div className="card mb-3">
            <div className="row g-0">

              <div className="col-md-8 parrafo_hija">
                <div className="card-body">
                  <h5 className="card-title">Abigaíl</h5>
                  <strong>MI HIJA</strong>
                  <p> padre de una hija de 4 años, he aprendido que la clave para presentarla es destacar su personalidad vibrante y su curiosidad innata por el mundo que la rodea. Mi hija es una niña llena de energía y creatividad, siempre lista para explorar nuevas aventuras y descubrir cosas emocionantes. Su risa contagiosa y su capacidad para encontrar la belleza en las cosas más simples me recuerdan la importancia de mantener viva la chispa de la curiosidad y la alegría en todo lo que hacemos. Nuestra relación está llena de momentos especiales de juego, aprendizaje y amor incondicional, lo que me ha enseñado la importancia de la paciencia, la empatía y la conexión genuina en las relaciones humanas.</p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={Hija} alt="developer" className="styles_img_hija m-4 img-thumbnail" />
              </div>
            </div>
          </div>

        </div>


      </div>














      {/* Segunda Sección */}

    </>
  )
}
export default Article1
