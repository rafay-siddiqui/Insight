import React from "react";
import Navbar from "../components/Navbar";
import NavbarMenu from "../components/NavbarMenu";
import LoginInfo from "../components/LoginInfo";
import { authContext } from "../providers/AuthProvider";
import Login from "../components/Login";
import { useState, useContext } from "react";

function StockPage() {
  const { auth } = useContext(authContext);
  return (
    <div>
      <Navbar>
        {!auth && <Login />}
        {auth && <LoginInfo />}
      </Navbar>

      <h1>Stock</h1>
    </div>
  );
}

export default StockPage;
