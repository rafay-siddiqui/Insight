import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { authContext } from "../providers/AuthProvider";
import StockView from "../views/StockView";
import './Stock.scss'

function StockPage(props) {
  const { auth } = useContext(authContext);
  return (
    <div>
      <h1>Stock</h1>
      <Navbar />
      <div className="body">
        <StockView />
      </div>
    </div>
  );
}

export default StockPage;
