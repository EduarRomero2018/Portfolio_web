import React from 'react'
import './styloshome.css'
// import from icons
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Home() {
  return (
    <div className='container_img'>
      <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            {/* <span className="up">Hola!</span> */}
            <span className="down">Eduardo Romero</span>
          </h1>
          <p className="header-subtitle">UN POCO SOBRE MI</p>
          <div className="socialnetwork">

            {/* <span>{<FaGithub />}</span>
            <span>{<BsLinkedin />}</span>
            <span>{<FaWhatsapp />}</span>
            <span>{<MdOutlineMarkEmailRead />}</span> */}

          <button className="btn btn-lg btn-outline-secondary m-1">{<FaGithub />}</button>
          <button className="btn btn-lg btn-outline-secondary m-1">{<BsLinkedin />}</button>
          <button className="btn btn-lg btn-outline-secondary m-1">{<FaWhatsapp />}</button>
          <button className="btn btn-lg btn-outline-secondary m-1">{<MdOutlineMarkEmailRead />}</button>


          </div>
      </div>
    </div>
  )
}

export default Home