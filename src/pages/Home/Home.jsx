import React from 'react'
import './styloshome.css'

function Home() {
  return (
    <div className='container_img'>
      <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">Hello!</span>
            <span className="down">I am Eduar Romero</span>
          </h1>
          <p className="header-subtitle">Desarrollador FullStack</p>

          <button className="btn btn-light">About</button>

      </div>
    </div>
  )
}

export default Home