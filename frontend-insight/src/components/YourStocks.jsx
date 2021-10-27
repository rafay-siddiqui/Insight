import React from "react";
import YourStocksItem from "./YourStocksItem";

import './YourStocks.scss'

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