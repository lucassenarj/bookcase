import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.css";

function Loader({ loading }) {
  return (
    <>
     {
       loading && (
        <div className="preloader">
          <div className="loader">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       )
     }
    </>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    loading: state.app.loading,
  };
}

export default connect(mapStateToProps)(Loader);
