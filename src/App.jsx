import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Components/GeneralStyles/generalstyles.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Experience from './pages/Experience/Experience';
import Proyects from './pages/Proyects/Proyects';
import Contact from './pages/Contact/Contact';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
     < Home />
     < Navbar />
     < AboutMe />
     < Experience />
     < Proyects/>
     < Contact/>

     {/* < Footer /> */}
    </div>
  )
}

export default App