import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./../NavItem";
import Logo from "./../../assets/images/logo.png";
import "./style.css";

function Header() {
  const [display, setDisplay] = useState(false);
  return (
    <header className="header-area">
      <div className="navbar-area headroom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
                <button onClick={() => setDisplay(!display)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse sub-menu-bar ${display ? "show" : ""}`} id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav m-auto">
                    <NavItem to="/" title="Home" />
                    <NavItem to="/search" title="Search" />
                    <NavItem to="/favorites" title="My books" />
                    <NavItem to="/about" title="About" />
                    <NavItem to="/contact" title="Contact" />
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
