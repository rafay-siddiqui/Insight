import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import logo from './images/2.jpg';
import background from './images/Background.jpg';

import Button from './components/Button';
import HistoryItem from './components/HistoryItem';
import History from './components/History';
import Avatar from './components/Avatar';
import YourStocks from './components/YourStocks';

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
     
      <div styles={{ backgroundImage:"./react-front-end/src/images/Background.jpg" }}>
      <ul className="App" >
        <div>
      <img src={logo} className= "App-logo" alt="logo" />
        <Button id="login" onClick={this.fetchData} label="Login" />
        <Button id="nav" onClick={this.fetchData} label="Nav" />
        <Button id="chart" onClick={this.fetchData} label="Chart" />
        </div>
        <div> <History></History> </div>
        <Avatar/>
        <YourStocks></YourStocks>
      </ul>
      </div>
    );
  }
}

export default App;
