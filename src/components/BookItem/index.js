import React from "react";
import PropTypes from "prop-types";
import ImageAuthor from "./../../assets/images/author-1.jpg";
import NoThumb from "assets/images/no-thumb.png";
import { useHistory } from "react-router-dom";
import { generateSlug } from "./../../utils/helpers";
import "./style.css";

function BookItem({ book }) {
  const slug = generateSlug(book.title);
  const history = useHistory();

  function handleClick() {
    const location = {
      pathname: `/details/${slug}`,
      state: { book }
    };
    history.push(location);
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 btn-click" onClick={() => handleClick()} data-testid="btn-click">
      <div className="single-blog mt-30 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.4s">
        <div className="blog-image">
          <div>
            <img src={book.imageLinks ? book.imageLinks.thumbnail : NoThumb} alt="news" />
          </div>
        </div>
        <div className="blog-content">
          <h4 className="blog-title">
            <div>{ book.title }</div>
          </h4>
          <div className="blog-author d-flex align-items-center">
            <div className="author-image">
              <img src={ImageAuthor} alt="author" />
            </div>
            <div className="author-content media-body">
              <h6 className="sub-title">{ book.authors }</h6>
              <p className="text">{ book.publishedDate }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageLinks: PropTypes.object,
    authors: PropTypes.arrayOf(PropTypes.string),
    publishedDate: PropTypes.string,
    averageRating: PropTypes.number,
  }).isRequired,
}

export default BookItem;
