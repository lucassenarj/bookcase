import React from "react";
import Background from "./../../assets/images/footer-bg.jpg";
import "./style.css";

function Footer(){
  return (
    <footer id="footer" className="footer-area" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container">
        <div className="footer-copyright text-center">
          <p className="text">
            © 2022
            Developed by <a href="https://lucassenarj.github.io/" rel="nofollow">Luacs Sena</a>
            &nbsp; layout by <a href="https://uideck.com" rel="nofollow">UIdeck</a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
