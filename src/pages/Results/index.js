import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Book from "./../../components/Book";
import Layout from "./../../components/Layout";
import Loader from "./../../components/Loader";
import "./style.css";

function ResultsPage() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Layout>
      <section className="blog-area mt-50 mb-50">
        { loading ? <Loader /> : (
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
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
              </div>
            </div>
          )
        }
      </section>
    </Layout>
  );
}

export default ResultsPage;
