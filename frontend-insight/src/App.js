import { React, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";
import Chandni from "./pages/Chandni";


function App() {
 
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/portfolio" component={PortfolioPage} exact />
        <Route path="/stock" component={StockPage} exact />
        <Route path="/" component={Home} exact />
        <Route path="/rafay" exact />
        <Route path="/rafay" component={Chandni} exact />
      </Switch>          
      </Router>
    </div>
    
  );
}

export default App;