import React, { useState } from "react";
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
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="Logo" />
                </a>
                <button onClick={() => setDisplay(!display)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse sub-menu-bar ${display ? "show" : ""}`} id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav m-auto">
                    <NavItem to="#home" title="Home" active={true} />
                    <NavItem to="#search" title="Search" active={false} />
                    <NavItem to="#favorites" title="My books" active={false} />
                    <NavItem to="#about" title="About" active={false} />
                    <NavItem to="#contact" title="Contact" active={false} />
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
