import React from "react";
import ImageNews from "./../../assets/images/news-1.jpg";
import ImageAuthor from "./../../assets/images/author-1.jpg";
import { Link } from "react-router-dom";
import "./style.css";

function Book() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="single-blog mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.4s">
        <div className="blog-image">
          <Link to="/details"><img src={ImageNews} alt="news" /></Link>
        </div>
        <div className="blog-content">
          <h4 className="blog-title">
            <Link to="/details">Nulla eget urna at tortor  turpi feugiat tristique in sit.</Link>
          </h4>
          <div className="blog-author d-flex align-items-center">
            <div className="author-image">
              <img src={ImageAuthor} alt="author" />
            </div>
            <div className="author-content media-body">
              <h6 className="sub-title">Author name</h6>
              <p className="text">13/03/2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
