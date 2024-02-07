import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assests/images/logo.svg";
import backIcon from "../../assests/icons/back.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-techer-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="proffy" />
        </div>

        <div className="header-content">
          <strong>Estes são os proffys disponíveis</strong>
        </div>
      </header>
    </div>
  );
}

export default TeacherList;
 