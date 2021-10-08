import React from 'react'
import Form from './Form'
import '../styles/home.css'

let Home = ({ state, updateState }) => {

    return (
        <div className="home">
            <h2>Un Chateau Animé...</h2>
            <h1>Rock Castle Events</h1>
            <h3>Retrouvez les évènements organisés par votre bon roi, à cette adresse.</h3>
            <div className="buttonHome" onClick={() => updateState(<Form />)}><p>Participer</p></div>
        </div>
    )
}

export default Home