import React from "react";

import logoImg from '../../assests/images/logo.svg'
import landingImg from '../../assests/images/landing.svg'

import studyIcon from '../../assests/icons/study.svg'
import giveClassesIcon from '../../assests/icons/give-classes.svg'
import purpleHeartIcon from '../../assests/icons/purple-heart.svg'

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo Profy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar" />
                        Estudar
                    </a>
                </div>

                <span className="total-connections">Total de 200 conexões realizadas <img src={purpleHeartIcon} alt=" Coração Roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;