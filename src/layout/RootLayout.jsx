import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BreatCrumb from "../components/BreatCrumb";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function RootLayout() {
  let { pathname } = useLocation();
  return (
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <BreatCrumb locat={pathname.slice(1)} />
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
