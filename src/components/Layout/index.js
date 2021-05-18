import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WOW from "wowjs";
import "./style.css";

function Layout({ children }) {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
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
