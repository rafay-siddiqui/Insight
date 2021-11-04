import React from "react";
import YourStocksItem from "./YourStocksItem";
import getStockList from "../api/GetStockList";
import { useQuery } from "react-query";

import './YourStocks.scss'

export default function YourStocks(props) {

  const query = useQuery('stockList', () => getStockList(1));

  if (query.data) {
    const holder = {};

    query.data.forEach(x => {
      if (holder.hasOwnProperty(x.stockticker)) {
        holder[x.stockticker] = holder[x.stockticker] + x.numberofstocks;
      } else {
        holder[x.stockticker] = x.numberofstocks
      }
    });

   let newData = []

    for (const prop in holder) {
      newData.push({ stockticker: prop, numberofstocks: holder[prop] });
    }

    return (
      <div className="stockDiv">
        <YourStocksItem header stock="Ticker" change="Total" />
        {newData.map(x => (
          <YourStocksItem stock={x.stockticker} change={x.numberofstocks} />
        ))}
      </div>
    )

  }

  if (query.isLoading) {
    return "Loading..."
  }

}