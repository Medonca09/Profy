import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assests/images/logo.svg";
import backIcon from "../../assests/icons/back.svg";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
