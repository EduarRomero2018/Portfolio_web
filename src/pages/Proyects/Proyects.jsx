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
                    <h2>VALORES</h2>
                    <div className="row p-3">
                        <div className="col-md-3">

                        <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Honestidad</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Integridad</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Respeto</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Confianza</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Compromiso</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Empatía</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Solidaridad</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">Generosidad</h5>

                                </div>
                            </div>
                        </div>






                </div>
                </div>
            </section>

        </>
    )
}

export default Proyects