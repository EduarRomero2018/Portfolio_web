import React from 'react'
import './stylosProyects.css'
import { Button } from 'react-bootstrap';
import LandinPages from '../../assets/images/landingPages.png';
import Crud from '../../assets/images/Crud.png';
import DashBoard from '../../assets/images/DashBoard.png';
import Restaurant from '../../assets/images/Restaurant.png';
import SaludWeb from '../../assets/images/SaludWeb.png';
import SectionDivider from '../../Components/svg/SvgFile';
function Proyects() {
    return (
        <>
              <SectionDivider></SectionDivider>
            <section id="portfolio" className="portfolio">
                <div className="contenido-seccion">
                    <h2>PORTAFOLIO</h2>
                    <div className="galeria">
                        <div className="proyecto">
                            <img src={LandinPages} alt="Landin Pages" />
                            <div className="overlay">
                                <h3>Landin Pages</h3>
                                <p>Html 5 Semantico</p>
                                <p>Desarrollo CSS con Responsi Web Design</p>
                                <p>Manejo de Git y GitHub</p>

                                <button>
                                <a href="http://heyelk.github.io"></a> Ver Proyecto
                                    </button>
                                {/* <button to="https://heyelk.github.io/"> Ver Proyecto</button> */}
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={Crud} alt="Aplicacion Crud" />
                            <div className="overlay">
                                <h3>Crud de Pacientes</h3>
                                <p>Despliegue De Aplicaciones Frontend</p>
                                <p>Manejo De Procesos CRUD</p>
                                <p>Persistencia De Datos En Navegadores</p>
                                <p>Selección Y Gestión De DOM</p>
                                <button> Ver Proyecto</button>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={DashBoard} alt="Dashboard api" />
                            <div className="overlay">
                                <h3>Api Películas</h3>
                                <p>Control De Procesos Síncronos Y Asíncronos</p>
                                <p>Manejo De Gráficas Interactivas Web Con Chart.js</p>
                                <p>Modularización De Archivos JavaScript</p>
                                <p>Uso De APIs Públicas</p>
                                <button> Ver Proyecto</button>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={Restaurant}alt="Restaurante" />
                            <div className="overlay">
                                <h3>Restauránte</h3>
                                <p>Despliegue En Servicios "Serverless"</p>
                                <p>Manejo De React.js Con Hooks</p>
                                <p>Uso De Componentes Funcionales</p>
                                <button src="https://heyelk.pages.dev/"> Ver Proyecto</button>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src={SaludWeb} alt="Salud Web" />
                            <div className="overlay">
                            <h3>Web de Salud</h3>
                            <p>Uso De Componentes Funcionales</p>
                            <p>Despliegue En Servicios "Serverless"</p>
                            <button> Ver Proyecto</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Proyects