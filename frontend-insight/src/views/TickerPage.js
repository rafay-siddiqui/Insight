import React, { useState } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import searchTicker from "../hooks/useAppData";

import { LineChart, Line } from 'recharts';

export default function TickerPage(props) {
  const [state, setState] = useState({
    ticker: "",
    tickerChart: []
  })

  const onChange = (value) => {
    setState({
      ticker: value
    })
  }

  const createGraph = (event) => {
    event.preventDefault();
    searchTicker(state.ticker)
      .then((res) => setState({
        tickerChart: res
      }))
  }

  return (
    <div>
      <TickerSearchBar value={state.ticker} onChange={(e) => onChange(e.target.value)} onClick={createGraph} />
      <LineChart width={400} height={400} data={state.tickerChart}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );

}