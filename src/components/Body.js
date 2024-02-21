import React from "react";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

const Body = () => {
  return (
    <>
      <Navbar />
      <NavbarBottom />
      <Breadcrumbs />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
