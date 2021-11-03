import React from "react";
import YourStocksItem from "./YourStocksItem";

import './YourStocks.scss'

export default function YourStocks(props) {
  return (
    <div className="stockDiv">
        <YourStocksItem stock="GME" change="1000%" />
        <YourStocksItem stock="GME" change="1000%" />
        <YourStocksItem stock="GME" change="1000%" />
    </div>
  )
}