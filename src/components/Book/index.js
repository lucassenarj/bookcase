import React from "react";
import PropTypes from "prop-types";
import i18n from "i18n";
import "./style.css";

function Book({ book }) {
  return (
    <section className="blog-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-content mt-50">
              <div className="details-image">
                <img src={book.imageLinks.thumbnail} alt={book.title} />
              </div>
              <h3 className="details-title">{ book.title }</h3>
              <div className="blog-share d-flex">
                <ul className="social">
                  <li><i className="fa fa-heart"></i> { i18n.t("components.book.like") }</li>
                  <li><i className="fa fa-share"></i> { i18n.t("components.book.share") }</li>
                  <li><i className="fa fa-list"></i> { i18n.t("components.book.save") }</li>
                </ul>
              </div>
              <p className="text">{ book.description }</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="blog-sidebar mt-50">
              <div className="blog-sidebar-wrapper mb-60">
                <div className="blog-project">
                  <div className="sidebar-title text-center">
                    <h4 className="title">{ i18n.t("components.book.info") }</h4>
                  </div>
                  <div className="book-info">
                    <ul>
                      <li>
                      { i18n.t("components.book.author") }: <span>{ book.authors[0] }</span></li>
                      <li>{ i18n.t("components.book.publisher") }: <span>{ book.publisher }</span></li>
                      <li>{ i18n.t("components.book.pages") }: <span>{ book.pageCount }</span></li>
                      <li>{ i18n.t("components.book.date") }: <span>{ book.publishedDate }</span></li>
                      <li>{ i18n.t("components.book.language") }: <span> { book.language }</span></li>
                    </ul>
                  </div>
                </div>

                <div className="blog-project">
                  <div className="sidebar-title text-center">
                    <h4 className="title">{ i18n.t("components.book.identifiers") }</h4>
                  </div>
                  <div className="book-info">
                    <ul>
                      {
                        book.industryIdentifiers.map((identify, index) => (
                          <li key={index}>
                            {identify.type}
                            <span>{ identify.identifier }</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

                <div className="blog-ratting">
                  <div className="sidebar-title text-center">
                    <h4 className="title">{ i18n.t("components.book.my_books") }</h4>
                  </div>
                  <div className="ratting-list">
                    <ul>
                      <li>Like <span>50</span></li>
                      <li>Later <span>23</span></li>
                      <li>Finished <span>5</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.object.isRequired,
    industryIdentifiers: PropTypes.arrayOf(PropTypes.object),
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    pageCount: PropTypes.number.isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string,
    averageRating: PropTypes.number,
    language: PropTypes.string,
  }).isRequired,
}

export default Book;
