import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/Sheared/NavBar";
import Footer from "../Components/Sheared/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
