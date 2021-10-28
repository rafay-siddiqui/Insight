import React, { useContext, useState } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import searchTicker from "../helper/fetchers";

// import { LineChart, Line } from 'recharts';

export default function TickerPage(props) {
  const [ticker, setTicker] = useState("")
  const [chart, setChart] = useState([])


  const createGraph = (event) => {
    event.preventDefault();
    searchTicker(ticker)
      .then((res) => setChart(res)
      )
  }

  return (
    <div>
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      {chart.map(ele => (
        <li>{JSON.stringify(ele)}</li>
      ))}
    </div>
  );

}