import React, { useState } from 'react'

import Form from './Form'
import Calendar from './Calendar'
import HorsesSlider from './HorsesSlider'
import Home from './Home'
import Stuff from './Stuff'

import Ecusson from '../assets/images/ecusson.png'
import '../styles/navbar.css'

let Navbar = ({ state, updateState }) => {

    return (
        <>

        <div className="holderLogo" onClick={() => updateState(<Home state={state} updateState={updateState}/>)}><img src={Ecusson}/></div>

        <div className="navbar">
            <div className="spacingNav"></div>
            <div className="holderNav sides border" onClick={() => updateState(<Calendar state={state} updateState={updateState}/>)}><p>Calendrier</p></div>
            <div className="holderNav sides border" onClick={() => updateState(<Stuff state={state} updateState={updateState}/>)}><p>Equipements</p></div>
            <div className="holderNav sides border" onClick={() => updateState(<HorsesSlider />)}><p>Ecuries</p></div>
            <div className="holderNav sides border" onClick={() => updateState(<Form />)}><p>S'inscrire</p></div>
            <div className="spacingNav"></div>
        </div>

        </>
    )
}

export default Navbar 