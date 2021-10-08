import le_heaume from "../assets/images/le_heaume.jpg";
import la_lance from "../assets/images/lance_medievale.jpg";
import la_barde from "../assets/images/la_barde.jpg";
import la_selle from "../assets/images/selle.jpg";

import { FiArrowLeft } from "react-icons/fi";  
import Home from './Home'

import '../styles/stuff.css'

function Stuff({ state, updateState }) {
    return(
        <div className="containerStuff">
        
            <h1 className="titleStuff">Equipement du parfait jouteur</h1>
            <div className="arrowBack" onClick={ () => updateState(<Home />)}><FiArrowLeft /> Revenir au site</div>
        
            <div className="itemsList">
                    <div className="itemDiv">
                        <img className="imgItem" src={le_heaume}/>
                            <div className="txtItem">
                                <h2>Le heaume</h2>
                                <p>Casque fabriqué en acier, celui-ci protège toute la tête et est indispensable pour éviter les éclats de bois pouvant éclater lors du contact entre la lance et l'adversaire. En somme, le casque sera votre meilleur allié pour garder toute votre tête après votre joute !</p>
                            </div>
                    </div>
                    <div className="itemDiv">
                        <img className="imgItem" src={la_lance}/>
                            <div className="txtItem">
                                <h2>La lance</h2>
                                <p>Cette arme à long bois peut se présenter sous plusieurs formes. Son fût ou sa partie protégeant le poigner peut ainsi varier, libre à vous de choisir celle avec laquelle vous vous sentirez d'attaque pour faire choir votre adversaire !  </p>
                            </div>
                    </div>
                    <div className="itemDiv">
                        <img className="imgItem" src={la_barde}/>
                            <div className="txtItem">
                                <h2>La barde</h2>
                                <p>Sortez couvert, mais faites en sorte de protéger également votre fidèle destrier ! Ne perdez pas votre honneur en exposant votre monture à de graves blessures. La barde est faite pour ça ! Cette dernière protègera les parties les plus sensibles de votre cheval et amoindrira fortement les risques de blessures de votre compagnon équestre.</p>
                            </div>
                    </div>
                    <div className="itemDiv">
                        <img className="imgItem" src={la_selle}/>
                            <div className="txtItem">
                                <h2>La selle</h2>
                                <p>Bien se protéger est primordial. Mais à quoi bon se protéger si vous tombez de votre cheval avant d'avoir atteint votre adversaire ? Une selle de bonne qualité et bien adéquate à votre cheval vous évitera de devenir la risée du village en perdant vos étriers. Une selle bien montée, un combat remporté !</p>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Stuff