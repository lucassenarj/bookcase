import React from "react";
import Background from "./../../assets/images/footer-bg.jpg";
import { useTranslation } from 'react-i18next';
import "./style.css";

function Footer(){
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer-area" style={{ backgroundImage: `url(${Background})` }}>
      <div className="container">
        <div className="footer-copyright text-center">
          <p className="text">
            © {year}
            &nbsp;
            { t("components.footer.developed_by") }
            &nbsp;
            <a href="https://lucassenarj.github.io/" rel="nofollow" title="Lucas Sena">
              Luacs Sena
            </a>
            &nbsp;
            { t("components.footer.layout_by") } 
            &nbsp;
            <a href="https://uideck.com" rel="nofollow" title="UIdeck">
              UIdeck
            </a>
            &nbsp;
            { t("components.footer.all_rights_reserved") }
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
