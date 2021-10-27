import React from "react";
import "./App.scss";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./components/Button";
import History from "./components/History";
import YourStocks from "./components/YourStocks";
import TabView from "./components/TabView";

//Chandni
import Header from "./components/Header";
import Footer from "./components/Footer";

import Avatar from "./components/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const myApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API;

  axios
    .get(
      `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${myApiKey}`
    )
    .then((response) => {
      console.log(response);
    });

  return (
    <div >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/portfolio"> Portfolio </Link>
                <Link to="/stock/quote"> Stock Quote </Link>
              </li>
              <li>
                <Link to="/testing/rafay"> Rafay </Link>
                <Link to="/testing/burhan"> Burhan </Link>
                <Link to="/testing/chandni"> Chandni</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/portfolio">
              <div>
                <History></History>
              </div>
            </Route>

            <Route path="/stock/quote">
              <div>
                <h2>Stocks</h2>
              </div>
            </Route>

            {/* Rafay's testing page */}
            <Route path="/testing/rafay">
              <div>
                <h2>Rafay</h2>
                <h2> {myApiKey} </h2>
                <TabView></TabView>
              </div>
            </Route>

            {/* Burhan's testing page */}
            <Route path="/testing/burhan">
              <h2>Burhan</h2>
              <YourStocks />
              <Button chart>work pls</Button>
              <Button login>Login</Button>
            </Route>

            {/* Chandni's testing page */}

            <Route path="/testing/chandni">
              <h2>Chandni</h2>
              <div className="maincontainer">
                <Header></Header>
                <div>
                  <ul className="App">
                   <Avatar />
                  </ul>
                </div>
                <Footer></Footer>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
