import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./../NavItem";
import Logo from "./../../assets/images/logo.png";
import { useTranslation } from 'react-i18next';
import "./style.css";

function Header() {
  const [display, setDisplay] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="header-area">
      <div className="navbar-area headroom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link to="/">
                  <img src={Logo} alt="Bookcase" />
                </Link>
                <button onClick={() => setDisplay(!display)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse sub-menu-bar ${display ? "show" : ""}`} id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav m-auto">
                    <NavItem to="/" title={ t("components.header.navitems.home") } />
                    <NavItem to="/search" title={ t("components.header.navitems.search") } />
                    <NavItem to="/favorites" title={ t("components.header.navitems.my_books") } />
                    <NavItem to="/about" title={ t("components.header.navitems.about") } />
                    <NavItem to="/contact" title={ t("components.header.navitems.contact") } />
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
