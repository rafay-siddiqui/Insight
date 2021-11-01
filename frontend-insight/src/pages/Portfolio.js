import React from "react";
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "../components/Avatar";

import Navbar from "../components/Navbar";
import { authContext } from "../providers/AuthProvider";
//import Button from "../Button";
import LoginInfo from "../components/LoginInfo";
import Login from "../components/Login";
import Home from ".";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
} from "../components/Navbar/NavbarElements";
import MainView from "../views/mainView";
import Portfolio from "../views/Portfolio";

function PortfolioPage() {
  const { auth } = useContext(authContext);
  return (
    <div>
      {!auth && <Redirect to="/" />}
      {auth && <Redirect to="/portfolio" />}
      {auth && <LoginInfo />}
      <Navbar></Navbar>
      <MainView />
      <Portfolio></Portfolio>
    </div>
  );
}

export default PortfolioPage;
