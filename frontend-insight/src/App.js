import { React, useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import PortfolioPage from "./pages/Portfolio";
import StockPage from "./pages/Stock";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/portfolio" component={PortfolioPage} exact />
          <Route path="/stock" component={StockPage} exact />
          <Route path="/" component={Home} exact />
          <Route path="/rafay" exact />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;