import React from "react";
import PropTypes from "prop-types";
import BookItem from "./../BookItem";
import "./style.css";

function BookList({ books }) {
  return (
    <div className="row justify-content-center">
      {
        books.map(({ volumeInfo }, index) => <BookItem book={volumeInfo} key={index} />)
      }
    </div>
  );
}
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BookList;
