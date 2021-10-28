import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";
import Navbar from "./components/Navbar";


function App() {
 
  return (
    <div >
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/portfolio" component={PortfolioPage} exact />
        <Route path="/stock" component={StockPage} exact />
        <Route path="/" component={Home} exact />
      </Switch>          
    
      </Router>
    </div>
    
  );
}

export default App;
