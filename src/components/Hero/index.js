import React from "react";
import HeroImage from "./../../assets/images/hero-image.png";
import "./style.css";

function Hero() {
  return (
    <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="header-hero-content">
              <h1 className="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                <span>All your favorite books</span> <b>are just a click away</b>
              </h1>
              <p className="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                Searching for a book is very easy now. You can search for a book by title, author, ISBN, or any other keyword.
              </p>
              <div className="header-singup wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                <input type="text" placeholder="Title / Author / ISBN / Publisher" />
                <button className="main-btn">Search</button>
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
