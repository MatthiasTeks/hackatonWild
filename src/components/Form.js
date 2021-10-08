import React, { createRef, useState } from 'react'
import '../styles/form.css'
import { AiFillCheckCircle } from "react-icons/ai";

let Form = () => {

    const [activeClass, setActiveClass] = useState(false);

    return (
            <div id="container">
                <h1>&bull; S'INSCRIRE &bull;</h1>
                <div class="underline"></div>
                <form action="#" method="post" id="contact_form">
                    <div class="name">
                        <label for="name"></label>
                        <input type="text" placeholder="Nom" name="name" id="name_input" required></input>
                    </div>
                    <div class="email">
                        <label for="prenom"></label>
                        <input type="text" placeholder="Prénom" name="email" id="email_input" required></input>
                    </div>
                    <div class="telephone">
                        <label for="name"></label>
                        <input type="text" placeholder="Mon rang est" name="telephone" id="telephone_input" required></input>
                    </div>
                    <div class="subject">
                        <label for="subject"></label>
                        <select placeholder="Subject line" name="subject" id="subject_input" required>
                            <option disabled hidden selected>EVENEMENT</option>
                            <option>Joute Verbale du 9 Martis</option>
                            <option>Joute Equestre du 13 Sabatis</option>
                            <option>Anniversaire du Roi le 18 Jovis</option>
                            <option>Joute Verbale du 23 Martis</option>
                            <option>Joute Equestre du 27 Martis</option>
                        </select>
                    </div>
                    <div class="message">
                        <label for="message"></label>
                        <textarea name="message" placeholder="VOTRE MESSAGE ICI..." id="message_input" cols="30" rows="5" required></textarea>
                    </div>
                    <div class="submit">
                        <input type="button" value="ENVOYEZ UN CORBEAU" id="form_button" onClick={() => setActiveClass(true)}/>
                        <div className={'alert' + (activeClass? " activeAlert" : "")}>
                            <div className="logoAlert"><AiFillCheckCircle /></div>
                            <div className="msgAlert">Votre inscription sera bien prise en compte !</div>
                        </div>
                    </div>
                </form>
            </div>
    )
}       

export default Form