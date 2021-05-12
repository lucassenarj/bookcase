import React from "react";
import Layout from "./../../components/Layout";
import "./style.css";

function FavoritesPage() {
  return (
    <Layout>
      <section className="mt30 mb30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="content-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                <h6 className="welcome">WELCOME</h6>
                <h3 className="title"><span>Our 10 years working experience to </span> take care of your business goal.</h3>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col-lg-12">
              <div className="about-image mt-60 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <p>Page content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default FavoritesPage;
