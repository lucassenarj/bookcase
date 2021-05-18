import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookList from "./../../components/BookList";
import Layout from "./../../components/Layout";
import Loader from "./../../components/Loader";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/actions";
import "./style.css";

function ResultsPage({ books, getBooks, isLoading }) {
  const { state } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    getBooks(state);
  }, [state, getBooks]);

  return (
    <Layout>
      { isLoading ? <Loader /> : (
        <section className="blog-area mt-50 mb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="section-title text-center pb-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                  <h6 className="sub-title">{ t("pages.results.search_result_for") }</h6>
                  <h4 className="title">{ state }</h4>
                </div>
              </div>
            </div> 
            <div className="row justify-content-center">
              <BookList books={books} />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.books.loading,
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
