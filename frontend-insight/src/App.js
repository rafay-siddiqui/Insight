import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home </Link>
        <Link to='/testing/rafay'> Rafay </Link>
        <Link to='/testing/burhan'> Burhan </Link>
        <Link to='/testing/chandni'> Chandni</Link>

        <Switch>
          <Route path='/testing/rafay'>
            <h2>Rafay</h2>
          </Route>
          <Route path='/testing/burhan'>
            <h2>Burhan</h2>
          </Route>
          <Route path='/testing/chandni'>
            <h2>Chandni</h2>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
