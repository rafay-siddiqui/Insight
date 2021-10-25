import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Button from './components/Button';
import HistoryItem from './components/HistoryItem';
import History from './components/History';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <Button id="login" onClick={this.fetchData} label="Login" />
        <Button id="nav" onClick={this.fetchData} label="Nav" />
        <History></History>
      </div>
    );
  }
}

export default App;
