import React, { useEffect, useState } from "react";
import './History.scss'
import HistoryItem from "./HistoryItem";
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";

export default function History(props) {
  const query = useQuery('history', () => getDetailedHistory(1));
  if (query.isLoading) {
    return "Loading..."
  }

  return (
    <div>
      <ul className='list'>
        <HistoryItem id="historyTitle" stock="Ticker" holdings="Price" date="Purchase Date" amount="Amount" />
        {query.data.map(x => (
          <HistoryItem stock={x.stockticker} holdings={(x.purchaseprice * 1).toFixed(2)} date={(x.date.split('T'))[0]} amount={x.numberofstocks}/>
        ))}
      </ul>
    </div>
  )
}