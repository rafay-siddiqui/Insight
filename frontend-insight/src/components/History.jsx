import React from "react";
import './History.scss'
import HistoryItem from "./HistoryItem";
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";

export default function History(props) {
  const query = useQuery('history', () => getDetailedHistory(1));
  if (query.isLoading) {
    return "Loading..."
  }
  // return (
  //   // <ul>
  //   //   {/* <HistoryItem id="historyTitle" stock="Detailed History" holdings="Holdings" price="Price" change="Change" /> */}
  //   //   {data.forEach(datum => {
  //   //     // <HistoryItem stock={data[0].stockticker} holdings={data.numberofstocks} price={data.purchaseprice} />
  //   //     <li>
  //   //       {datum.stockticker}
  //   //     </li>
  //   //   })}
  //   // </ul>
  //   data.map(datum => {
  //     <h3>hello</h3>
  //   })
  // )
  return (
    <div>
      <ul>
        <HistoryItem id="historyTitle" stock="Detailed History" holdings="Holdings" price="Price" change="Change" />
        {query.data.map(x => (
          <HistoryItem stock={x.stockticker} holdings={x.numberofstocks} price={x.purchaseprice} change="1.5%"/>
        ))}
      </ul>
    </div>
  )
}