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
        <HistoryItem id="historyTitle" stock="Ticker" holdings="Value" date="Purchase Date" change="Change" />
        {query.data.map(x => (
          <HistoryItem stock={x.stockticker} holdings={x.numberofstocks * x.purchaseprice} date={x.date} change={(Math.random() * (1.80 - 0.01) + 0.01).toFixed(2) + '%'}/>
        ))}
      </ul>
    </div>
  )
}