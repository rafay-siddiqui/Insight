import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages";
import PortfolioPage from "./pages";
import StockPage from "./pages";


function App() {
 
  return (
    <div >
      <Router>
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="/PortfolioPage" component={PortfolioPage} exact />
        <Route path="/StockPage" component={StockPage} exact />
      </switch>          
    
      </Router>
    </div>
    
  );
}

export default App;
