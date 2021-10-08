import React from 'react'
import Ecusson from '../assets/images/ecusson.png'
import '../styles/navbarBurger.css'
import Form from './Form'
import Calendar from './Calendar'
import HorsesSlider from './HorsesSlider'
import Home from './Home'
import { useState } from "react";
import Stuff from './Stuff'


let NavbarBurger = ({ stateNav, updateStateNav }) => {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
         <nav className={`navbarBurger ${showLinks ? "showNav" : "hideNav"}`}>
             <div className="holderLogoBurger" onClick={() => updateStateNav(<Home stateNav={stateNav} updateStateNav={updateStateNav}/>)}><img src={Ecusson}/></div>
                <ul className="navbarBurgerLinks">
                    <li className="holderLogoBurgerOn">
                        <div className="navbarBurgerLink" onClick={() => {updateStateNav(<Home />); handleShowLinks()}}><img src={Ecusson}/></div>
                    </li>
                    <li className="navbarBurgerItems" >
                        <div className="navbarBurgerLink" onClick={() => {updateStateNav(<Calendar />); handleShowLinks()}}>Calendrier</div>
                    </li>
                    <li className="navbarBurgerItems">
                        <div className="navbarBurgerLink" onClick={() => {updateStateNav(<Stuff />); handleShowLinks()}}>Equipements</div>
                    </li>
                    <li className="navbarBurgerItems">
                        <div className="navbarBurgerLink" onClick={() => {updateStateNav(<HorsesSlider />); handleShowLinks()}}>Ecurie</div>
                    </li>
                    <li className="navbarBurgerItems">
                        <div className="navbarBurgerLink" onClick={() => {updateStateNav(<Form/>); handleShowLinks()}}>S'inscrire</div>
                    </li>
                </ul>
                <button className="navbarBurgerButton" onClick={handleShowLinks}>
                    <span className="burgerBar"></span>
                </button>
        </nav>
    )
}

export default NavbarBurger