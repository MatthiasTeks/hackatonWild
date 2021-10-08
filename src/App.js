import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import NavbarBurger from './components/NavbarBurger'

import Castle from './assets/videos/castle.mp4'

import './style.css'

function App() {

  /* Initialize state global for body components */
    const [stateGlobal, setStateGlobal] = useState('');

    useEffect(() => {
      setStateGlobal(<Home state={stateGlobal} updateState={setStateGlobal}/>);
    }, []);

    let isMobile = window.innerWidth; 

  return (
      <>
      <div className="container">
        <video id="backgroundVideo" loop autoPlay muted> {/* background vidéo */}
          <source src={Castle} type="video/mp4"/>
        </video>
        <Navbar state={stateGlobal} updateState={setStateGlobal}/>
        { isMobile < 1024 &&
          <div><NavbarBurger stateNav={stateGlobal} updateStateNav={setStateGlobal}/></div>
        }
        <div>
        {stateGlobal}
        </div>
      </div>

      <Footer />
      </>
  );
}

export default App;
