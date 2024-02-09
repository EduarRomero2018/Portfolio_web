import React from 'react'
import './stylesTechnologies.css'
import svgreact from '../../assets/svg/svgreact.svg'
import svghtml from '../../assets/svg/svghtml.svg'
import svgcss from '../../assets/svg/svgcss.svg'
import bootstrap from '../../assets/svg/svgbootstrap.svg'
import JavaScript from '../../assets/svg/svgjavascript.svg'
import tailwind from '../../assets/svg/svgtailwind.svg'
import nodejs from '../../assets/svg/svgnode.svg'
import express from '../../assets/svg/svgexpress.svg'
import firebase from '../../assets/svg/svgfirebase.svg'
import mysql from '../../assets/svg/svgmysql.svg'
import sqlserver from '../../assets/svg/svgsqlserver.svg'
import php from '../../assets/svg/svgphp.svg'
import git from '../../assets/svg/svggit.svg'
import vite from '../../assets/svg/svgvite.svg.svg'

function Technologies() {
  return (
    <>
      <section>
        <div className='container p-5'>
          <div className="card text-center">
            <div className="card-header"><h1>Habilidades</h1></div>
            <div className="card-body">
              <p className="card-text">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <div className="size_img">
                      <h2>FrontEnd</h2>
                      <img src={svghtml} className='p-2' alt="logo de html" />
                      <img src={svgcss} className='p-2' alt="logo de css" />
                      <img src={bootstrap} className='p-2' alt="logo de bootstrap" />
                      <img src={tailwind} className='p-2' alt="logo de tailwinds" />
                      <img src={JavaScript} className='p-2' alt="logo de javascript" />
                      <img src={svgreact} className='p-2' alt="logo de react" />
                      <img src={git} className='p-2' alt="logo de git" />
                    </div>
                  </div>


                  {/* Segunda columna */}
                  <div className="col-md-6 p-5 border-start">
                    <div className="size_img">
                      <h2>BackEnd</h2>
                      <img src={nodejs} className='p-2' alt="logo de node js" />
                      <img src={express} className='p-2' alt="logo de express" />
                      <img src={firebase} className='p-2' alt="logo de firebase" />
                      <img src={mysql} className='p-2' alt="logo de mysql" />
                      <img src={sqlserver} className='p-2' alt="logo de sql server" />
                      <img src={php} className='p-2' alt="logo de php" />
                      <img src={vite} className='p-2' alt="logo de vite" />
                    </div>
                  </div>
                </div>
              </p>
            </div>
            {/* <div className="card-footer"><h2>Algunas tecnologías</h2></div> */}
          </div>
        </div>
      </section>

      {/* TEST */}
      {/* <div className="container">
  <div className="row text-center justify-content-center mb-5">
    <div className="col-xl-6 col-lg-8">
      <h2 className="font-weight-bold">A Company Evolution</h2>
      <p className="text-muted">
        We’re very proud of the path we’ve taken. Explore the history that made
        us the company we are today.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title={2003}
          >
            <div className="inner-circle" />
            <p className="h6 mt-3 mb-1">2003</p>
            <p className="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title={2004}
          >
            <div className="inner-circle" />
            <p className="h6 mt-3 mb-1">2004</p>
            <p className="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title={2005}
          >
            <div className="inner-circle" />
            <p className="h6 mt-3 mb-1">2005</p>
            <p className="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title={2010}
          >
            <div className="inner-circle" />
            <p className="h6 mt-3 mb-1">2010</p>
            <p className="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
          </div>
        </div>
        <div className="timeline-step mb-0">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            data-content="And here's some amazing content. It's very engaging. Right?"
            data-original-title={2020}
          >
            <div className="inner-circle" />
            <p className="h6 mt-3 mb-1">2020</p>
            <p className="h6 text-muted mb-0 mb-lg-0">In Fortune 500</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}


    </>
  )
}

export default Technologies