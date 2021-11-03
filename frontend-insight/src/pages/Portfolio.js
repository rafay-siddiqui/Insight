import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../views/Portfolio";
import './Portfolio.scss'

function PortfolioPage(props) {
  return (
    <div>
      <Navbar/>
      <div className="body">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default PortfolioPage;