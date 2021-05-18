import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/actions";
import Hero from "./../../components/Hero";
import Layout from "./../../components/Layout";
import Loader from "./../../components/Loader";
import "./style.css";

function HomePage({ isLoading, loading }){
  useEffect(() => {
    loading(false);
  }, [loading]);

  return (
    <Layout>
      { isLoading ? <Loader /> : <Hero /> }
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    isLoading: state.app.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
