import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HeroImage from "./../../assets/images/hero-image.png";
import { useTranslation } from 'react-i18next';
import "./style.css";

function Hero() {
  const history = useHistory();
  const { t } = useTranslation();
  const [params, setParams] = useState("");

  function handleSearch() {
    history.push("/results", params);
  }

  return (
    <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="header-hero-content">
              <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <span>{ t("components.hero.title") }</span>
                <b>{ t("components.hero.subtitle") }</b>
              </h1>
              <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                { t("components.hero.text") }
              </p>
              <div className="header-singup wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                <input
                  type="text"
                  placeholder={ t("components.hero.placeholder") }
                  value={params}
                  onChange={(e) => setParams(e.target.value)}
                />
                <button onClick={() => handleSearch()} className="main-btn">{ t("components.hero.search") }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="1.1s">
        <div className="image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
