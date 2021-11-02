import React, { useEffect, useState, useContext } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";


function App() {
  const [balanceVal, setBalanceVal] = useState(0);


  const balanceSetter = (amount) => {
    setBalanceVal(prevState => parseInt(prevState) + parseInt(amount));
  }

  // const [users, setUsers] = useState(false);
  // useEffect(() => {
  //   getUser();
  // }, []);
  // function getUser() {
  //   fetch("http://localhost:8080")
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       setUsers(data);
  //     });
  // }
  // function createUser() {
  //   let name = prompt('Enter user name');
  //   fetch('http://localhost:8080/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name }),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getUser();
  //     });
  // }
  // function deleteUser() {
  //   let id = prompt('Enter user id');
  //   fetch(`http://localhost:8080/users/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getUser();
  //     });
  // }
  return (
    <>
      <Router>
        {/* <div>
          {users ? users : 'There is no user data available'}
          <br />
          <button onClick={createUser}>Add user</button>
          <br />
          <button onClick={deleteUser}>Delete user</button>
        </div> */}
        <Navbar/>
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