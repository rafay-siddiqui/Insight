import React from "react";
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "../components/Avatar";

import Navbar from "../components/Navbar";
import { authContext } from "../providers/AuthProvider";
//import Button from "../Button";
import LoginInfo from "../components/LoginInfo";
import Portfolio from "../views/Portfolio";
import './Portfolio.scss'

function PortfolioPage(props) {
  const { auth } = useContext(authContext);
  return (
    <div>
      {!auth && <Redirect to="/" />}
      {auth && <Redirect to="/portfolio" />}
      <Navbar />
      {auth && <LoginInfo />}
      <div className="body">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default PortfolioPage;
