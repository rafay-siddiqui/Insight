import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  //Should throw these database query functions into their own file later
  //Should use proxy so url is not hardcoded
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    fetch("http://localhost:8080")
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }
  function createUser() {
    let name = prompt('Enter user name');
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }
  function deleteUser() {
    let id = prompt('Enter user id');
    fetch(`http://localhost:8080/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          {users ? users : 'There is no user data available'}
          <br />
          <button onClick={createUser}>Add user</button>
          <br />
          <button onClick={deleteUser}>Delete user</button>
        </div>

        <Router>
          <Switch>
            <Route path="/portfolio" component={PortfolioPage} exact />
            <Route path="/stock" component={StockPage} exact />
            <Route path="/" component={Home} exact />
            <Route path="/rafay" exact />
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;