import { React, useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import History from "./components/History";
import TabView from "./components/TabView";
import TickerPage from './views/TickerLookup';
import MainView from "./views/mainView";

//Chandni
import Header from "./components/Header";
import Footer from "./components/Footer";

import Avatar from "./components/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
//Chandni

//Rafay
import Portfolio from "./views/Portfolio";


function App() {

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

            <Route path='/stock/quote'>
              <MainView />
            </Route>

            {/* Rafay's testing page */}
            <Route path="/testing/rafay">

              <div>
                <TabView></TabView>
              </div>

              <div style={{ display: "flex" }} className='portfolioDiv'>

                {/* <StockQuote data={displayStock} /> */}
                <Portfolio></Portfolio>


                {/* <TickerLookup onClick={showStock} ></TickerLookup> */}

              </div>
            </Route>

            {/* Burhan's testing page */}

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
