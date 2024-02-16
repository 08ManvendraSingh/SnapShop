import React from "react";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <Navbar />
      <NavbarBottom />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
