import React from "react";

import './YourStocks.css'

import YourStocksItem from "./YourStocksItem";

export default function YourStocks(props) {
  return (
    <div className="stockDiv">
      <h2>Your Stocks</h2>
      <ul className="yourStocks">
        <YourStocksItem stock="GME" change="1000%" />
        <YourStocksItem stock="GME" change="1000%" />
        <YourStocksItem stock="GME" change="1000%" />
      </ul>
    </div>
  )
}