import React, { useEffect } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import WOW from "wowjs";

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
