import React, { useEffect } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import WOW from "wowjs";
import { useTranslation } from 'react-i18next';
import "./style.css";

function Layout({ children }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
    i18n.changeLanguage("en");
  }, []);

  return (
    <>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  );
};

export default Layout;
