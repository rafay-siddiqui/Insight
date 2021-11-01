import React from "react";
import Navbar from "../components/Navbar";
import NavbarMenu from "../components/NavbarMenu";
import LoginInfo from "../components/LoginInfo";
import { authContext } from "../providers/AuthProvider";
import Login from "../components/Login";
import { useState, useContext } from "react";
import StockView from "../views/StockView";

function StockPage(props) {
  const { auth } = useContext(authContext);
  return (
    <div>
      <Navbar balance={props.balance} addBalance={props.addBalance} />
      <h1>Stock</h1>
      <StockView/>
    </div>
  );
}

export default StockPage;
