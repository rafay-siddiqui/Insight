import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {ApiDataProvider} from './providers/ApiDataProvider';

import Button from './components/Button';
import History from './components/History';
import YourStocks from './components/YourStocks';
import TabView from './components/TabView';
import TickerPage from './views/TickerPage';

function App() {
  return (
    <div className="App">
      <ApiDataProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home </Link>
                </li>
                <li>
                  <Link to='/portfolio'> Portfolio </Link>
                  <Link to='/stock/quote'> Stock Quote </Link>
                </li>
                <li>
                  <Link to='/testing/rafay'> Rafay </Link>
                  <Link to='/testing/burhan'> Burhan </Link>
                  <Link to='/testing/chandni'> Chandni</Link>
                </li>
              </ul>
            </nav>

            <Switch>

              <Route path='/portfolio'>
                <div>
                  <History></History>
                </div>
              </Route>

              <Route path='/stock/quote'>
                <div>
                  <h2>Stocks</h2>
                  <TickerPage />
                </div>
              </Route>

              {/* Rafay's testing page */}
              <Route path='/testing/rafay'>
                <div>
                  <h2>Rafay</h2>
                  <TabView></TabView>
                </div>
              </Route>

              {/* Burhan's testing page */}
              <Route path='/testing/burhan'>
                <h2>Burhan</h2>
                <YourStocks />
                <Button chart>work pls</Button>
                <Button login>Login</Button>
              </Route>

              {/* Chandni's testing page */}
              <Route path='/testing/chandni'>
                <h2>Chandni</h2>
              </Route>

            </Switch>
          </div>
        </Router>
      </ApiDataProvider>
    </div>
  );
}

export default App;
