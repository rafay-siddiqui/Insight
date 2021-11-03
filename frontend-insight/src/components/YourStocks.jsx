import React, { useState } from "react";
import YourStocksItem from "./YourStocksItem";
import { useQuery } from "react-query";
import { getStockChange } from "../helper/fetchers";
import getDetailedHistory from "../api/GetDetailedHistory";

import './YourStocks.scss'

export default function YourStocks(props) {
  // const [state, setState] = useState({
  //   stockChangeArray: []
  // });
  // const purchaseQuery = useQuery('purchase', () => getDetailedHistory(1));
  // const fakeQuery = useQuery('purchase', () => getStockChange('AAPL'));
  // getStockChange()
  // .then((res) => {
  //   return console.log(res.historical[0]);
  // })

  // if (purchaseQuery.isLoading) {
  //   return (
  //     <div className="stockDiv">
  //       <h5>Loading...</h5>
  //     </div>
  //   )
  // }

  // const stateManager = purchaseQuery.data.forEach(purchase => {
  //   getStockChange(purchase.stockticker)
  //     .then(res => {
  //       console.log(res.historical[0].changePercent);
  //       setState(prevState => ({
  //         stockChangeArray: [...prevState.stockChangeArray, [res.symbol, res.historical[0].changePercent]]
  //       }))
  //       // <YourStocksItem stock={purchase.stockticker} change={res.historical[0].changePercent} />
  //     })
  //   return state.stockChangeArray;
  //   })

  return (
    <div className="stockDiv">
      <YourStocksItem header stock="Ticker" change="Change" />
      <YourStocksItem stock="AAPL" change="0.32%" />
      <YourStocksItem stock="HOOD" change="1.20%" />
      <YourStocksItem stock="GME" change="0.04%" />
      <YourStocksItem stock="TSLA" change="4.08%" />
      <YourStocksItem stock="AMC" change="0.95%" />
      <YourStocksItem stock="MSFT" change="0.83%" />
      <YourStocksItem stock="GOOG" change="1.06%" />
      {/* {purchaseQuery.data && purchaseQuery.data.map(purchase => (
      getStockChange(purchase.stockticker)
        .then(res => {
          console.log(res.historical[0].changePercent);
          // <YourStocksItem stock={purchase.stockticker} change={res.historical[0].changePercent} />
        })
      // <h3>hello</h3>
    ))
    // } */}
    </div>
  )
}