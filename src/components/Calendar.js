import React, { useState } from 'react'
import Form from './Form'
import '../styles/calendar.css'


let Calendar = ({ state, updateState }) => {

    return (
        <div class="wrapper">
            <main>
                <div class="toolbar">
                    <div class="current-month">Nones 15</div>
                </div>
                <div class="calendar">
                    <div class="calendar__header">
                        <div>lunaes</div>
                        <div>martis</div>
                        <div>mercurii</div>
                        <div>jovis</div>
                        <div>veneris</div>
                        <div>sabbati</div>
                        <div>dominica</div>
                    </div>
                    <div class="calendar__week">
                        <div class="calendar__day day">1</div>
                        <div class="calendar__day day">2</div>
                        <div class="calendar__day day">3</div>
                        <div class="calendar__day day">4</div>
                        <div class="calendar__day day">5</div>
                        <div class="calendar__day day">6</div>
                        <div class="calendar__day day">7</div>
                    </div>
                    <div class="calendar__week">
                        <div class="calendar__day day">8</div>
                        <div class="calendar__day day" id="jouteV"onClick={() => updateState(<Form />)}>9<p>Joute Verbale</p></div>
                        <div class="calendar__day day">10</div>
                        <div class="calendar__day day">11</div>
                        <div class="calendar__day day">12</div>
                        <div class="calendar__day day" id="jouteC" onClick={() => updateState(<Form />)}>13<p>Joute Equestre</p></div>
                        <div class="calendar__day day">14</div>        
                    </div>
                    <div class="calendar__week">
                        <div class="calendar__day day">15</div>
                        <div class="calendar__day day">16</div>
                        <div class="calendar__day day">17</div>
                        <div class="calendar__day day" id="party" onClick={() => updateState(<Form />)}>18<p>Anniversaire du Roi</p></div>
                        <div class="calendar__day day">19</div>
                        <div class="calendar__day day">20</div>
                        <div class="calendar__day day">21</div>    
                    </div>
                    <div class="calendar__week">
                        <div class="calendar__day day">22</div>
                        <div class="calendar__day day" id="jouteV" onClick={() => updateState(<Form />)}>23<p>Joute Verbale</p></div>
                        <div class="calendar__day day">24</div>
                        <div class="calendar__day day">25</div>
                        <div class="calendar__day day">26</div> 
                        <div class="calendar__day day" id="jouteC" onClick={() => updateState(<Form />)}>27<p>Joute Equestre</p></div> 
                        <div class="calendar__day day">28</div> 
                    </div>
                    <div class="calendar__week">
                        <div class="calendar__day day">29</div>
                        <div class="calendar__day day">30</div>
                        <div class="calendar__day day">31</div>
                        <div class="calendar__day day">1</div>
                        <div class="calendar__day day">2</div>
                        <div class="calendar__day day">3</div>
                        <div class="calendar__day day">4</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Calendar