import React from 'react'
import './stylosContact.css'
import Ubicacion from '../../assets/images/ubicacion.png'
function Contact() {
  return (
    <>
    <section id="contacto" className="contacto">
  <div className="contenido-seccion">
    <h2>CONTACTO</h2>
    <div className="fila">
      {/* Formulario */}
      <div className="col">
        <input type="text" placeholder="Tú Nombre" />
        <input type="text" placeholder="Número telefónico" />
        <input type="text" placeholder="Dirección de correo" />
        <input type="text" placeholder="Tema" />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Mensaje"
          defaultValue={""}
        />
        <button>
          Enviar Mensaje
          <i className="fa-solid fa-paper-plane" />
          <span className="overlay" />
        </button>
      </div>
      {/* Mapa */}
      <div className="col">
        <img src={Ubicacion} alt="" />
        <div className="info">
          <ul>
            <li>
              <i className="fa-solid fa-location-dot" />
            Colombia, Cartagena
            </li>
            <li>
              <i className="fa-solid fa-mobile-screen" />
            Contacto: 301231906
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              Email: romero.eduar@caminosips.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact