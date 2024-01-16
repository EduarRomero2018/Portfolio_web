import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/GeneralStyles/generalstyles.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Article1 from './pages/Article1/Ariticle1';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
     < Home />
     < Navbar />
     < Article1 />
     {/* < Footer /> */}
    </div>
  )
}

export default App