import React, {useState} from "react";
import YourStocksItem from "./YourStocksItem";
import getStockList from "../api/GetStockList";
import { useQuery } from "react-query";
import checkData from "../api/CheckData";
import getStockData from "../api/GetStockData";

import './YourStocks.scss'

export default function YourStocks(props) {

  // const [stockList, setStockList] = useState('')
  // setStockList(getStockList(1))
  // if (stockList) {
  //   const stocks = stockList
  //   console.log(stocks)
    // stockList.forEach(stock => {
    //   checkData(stock)
    //   .then(res => console.log(res))
    // })
  // }

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

    //add each stock's historical data to database
    query.data.forEach(stock => {
      console.log('from yourstocks ', stock)
    })

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