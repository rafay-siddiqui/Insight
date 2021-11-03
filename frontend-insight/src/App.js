import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/portfolio" exact>
             <PortfolioPage />
          </Route>
          <Route path="/stock" exact>
            <StockPage />
          </Route>
          <Route path="/" component={Home} exact />
          <Route path="/rafay" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;