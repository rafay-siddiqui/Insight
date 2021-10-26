import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Button from './components/Button';
import History from './components/History';

function App() {
  return (
    <div className="App">
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
              </div>
            </Route>

            {/* Rafay's testing page */}
            <Route path='/testing/rafay'>
              <div>
                <h2>Rafay</h2>
              </div>
            </Route>

            {/* Burhan's testing page */}
            <Route path='/testing/burhan'>
              <h2>Burhan</h2>
              <Button chart label='work pls' ></Button>
            </Route>

            {/* Chandni's testing page */}
            <Route path='/testing/chandni'>
              <h2>Chandni</h2>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
