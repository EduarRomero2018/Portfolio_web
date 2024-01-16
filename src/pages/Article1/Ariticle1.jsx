import React from 'react'
import "./stylosArticle.css";

// import valores from '../../Images/Nuestros Valores.webp';
// import aboutus from "../../Images/About.webp";
import { BsFillBookmarkStarFill, BsFillBookmarkCheckFill, BsFillBookmarkHeartFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaLocationDot, FaArrowRightToCity, FaKitMedical, FaHouseMedicalCircleXmark, FaPumpMedical, FaHospitalUser } from "react-icons/fa6";
import { GiMedicalDrip, GiMedicalThermometer } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { TbClockHour11 } from "react-icons/tb";
const Article1 = () => {



  return (
    <>
      <div className="col-md-12">
        {/* <img src={aboutus} alt="" className="styles_img" /> */}
      </div>

      <div className="container-fluid">

        <div className="row mt-5 text-center">
          <div className="col-sm-4">
            <div className="card-body style_border1">
              <span className='styles_icon'><BsFillBookmarkStarFill /></span>
              <h5 className="card-title">Misión</h5>
              <p className="card-text secondary_title">Salud-Web IPS atiende la salud de sus usuarios, con calidad científica y humana, con un recurso humano competente, tecnología avanzada e infraestructura confortable y segura, comprometidos con los derechos de la población de manera integral en las diferentes etapas de la vida.</p>

            </div>

          </div>
          <div className="col-sm-4">
            <div className="card-body style_border1">
              <span className='styles_icon'><BsFillBookmarkCheckFill /></span>
              <h5 className="card-title">Visión</h5>
              <p className="card-text secondary_title">Al año 2030 Salud-Web IPS es reconocida a nivel regional por brindar servicios de salud de mediana complejidad con excelencia y seguridad, comprometidos con el desarrollo social, generando impacto positivo en la atención que conlleve al mejoramiento continuo para su desarrollo.</p>

            </div>

          </div>
          <div className="col-sm-4">
            <div className="card-body style_border1">
              <span className='styles_icon'><BsFillBookmarkCheckFill /></span>
              <h5 className="card-title">Política de Calidad</h5>
              <p className="card-text secondary_title">Salud-Web IPS se compromete con la generación de impacto social en la mejora del desarrollo social de la niñez y los adolescentes, cumpliendo con nuestros objetivos, y con lo establecido para lograr la satisfacción de los usuarios mediante el mejoramiento continuo. </p>

            </div>

          </div>
        </div>


        <div className="row mt-3 fondo">
          <div className="col-md-6 m-0 row justify-content-center align-items-center">
            <div className="col-auto text-center">
              {/* <img className="img-fluid m-3 img_reservas" src={valores} alt="Reservas" /> */}
            </div>
          </div>

          <div className="col-md-6 m-0 row justify-content-center align-items-center">
            <span className='styles_icon_values text-center'><BsFillBookmarkHeartFill /></span>
            <h2 className='title_values'>Nuestros Valores</h2>
            <ul className="list_values text-left">
              <li className='titlet'> <BsFillPatchCheckFill /> Innovación:
                <p className='titlep'>
                  Buscar constantemente nuevas y mejores formas de presentar y promover los servicios de salud, utilizando tecnologías y enfoques vanguardistas.

                </p>
              </li>
              <li className='titlet'> <BsFillPatchCheckFill /> Colaboración:
                <p className='titlep'>
                  Fomentar un espíritu de trabajo en equipo, tanto dentro de la empresa como con los clientes y socios, para crear soluciones efectivas y adaptadas a sus necesidades.
                </p>
              </li>
              <li className='titlet'> <BsFillPatchCheckFill /> Transparencia:
                <p className='titlep'>
                  Mantener una comunicación abierta y honesta con los clientes, brindándoles información clara sobre el funcionamiento de la plataforma y los beneficios que pueden obtener.
                </p>
              </li>
              <li className='titlet'> <BsFillPatchCheckFill /> Adaptabilidad:
                <p className='titlep'>
                  Estar siempre dispuestos a ajustar la plataforma para satisfacer las cambiantes necesidades del mercado de la salud y las demandas específicas de los clientes.
                </p>
              </li>
              <li className='titlet'> <BsFillPatchCheckFill /> Responsabilidad:
                <p className='titlep'>
                  Compromiso con la integridad y la ética en todas las interacciones, asegurando que la publicidad y la presentación de servicios reflejen con precisión la realidad de lo que se ofrece.
                </p>
              </li>
              <li className='titlet'> <BsFillPatchCheckFill /> Eficiencia:
                <p className='titlep'>
                  Buscar la optimización de procesos y recursos para ofrecer una plataforma ágil y eficiente que brinde resultados efectivos tanto para los proveedores de servicios como para los usuarios finales.
                </p>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 bg-info stylosbannerazul">
        <div className="row">
          <div className="col-md-4 text-center mt-4">
            <h5 className='titlet'>Ubicación</h5>
            <ul className="list_values">
              <li className='m-2'> <FaLocationDot /> Distrito turístico y cultural, Cra. 6 # 5 - 101</li>
              <li className='m-2'> <FaArrowRightToCity /> Cartagena de Indias</li>
              <li className='m-2'> <FaArrowRightToCity /> Provincia de Cartagena, Bolívar</li>
            </ul>
          </div>


          <div className="col-md-4 text-center mt-4">
            <h5>Recursos Humanos</h5>
            <ul className="list_values">
              <li className='m-2'> <FaHandHoldingMedical /> Médico general</li>
              <li className='m-2'> <FaKitMedical /> Médicos especialistas</li>
              <li className='m-2'> <FaHouseMedicalCircleXmark /> Jefe Enfermera</li>
              <li className='m-2'> <FaPumpMedical /> Auxiliar de enfermería </li>
              <li className='m-2'> <GiMedicalDrip /> Técnico RX </li>
              <li className='m-2'> <GiMedicalThermometer /> Bacteriólogo </li>
              <li className='m-2'> <FaHospitalUser /> Auxiliares atención al usuario </li>
            </ul>
          </div>

          <div className="col-md-4 text-center mt-4">
            <h5>Horario de atención </h5>
            <ul className="list_values">
            <li> <TbClockHour11 /> Lunes a viernes 6:00am a 7:00pm</li>
              <li> <TbClockHour11 /> Sábados 6:00am a 1:00pm</li>
              </ul>
          </div>
        </div>
      </div>

    </>
  )
}
export default Article1
