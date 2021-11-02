import React from "react";
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import { authContext } from "../providers/AuthProvider";
//import Button from "../Button";
import LoginInfo from "../components/LoginInfo";


import MainView from "../views/mainView";
import Portfolio from "../views/Portfolio";


function PortfolioPage() {
  const { auth } = useContext(authContext);
  return (
    <>
      {!auth && <Redirect to="/" />}
      {auth && <Redirect to="/portfolio" />}
      {auth && <LoginInfo />}
      <Navbar></Navbar>
    
      <Portfolio></Portfolio>
      <Footer/>
    </>
  );
}

export default PortfolioPage;
