import React, { useContext, useState } from "react";
// import TickerSearchBar from "../components/TickerSearchBar";
// import searchTicker from "../hooks/useAppData";

import { LineChart, Line } from 'recharts';
import { apiDataContex } from "../providers/ApiDataProvider";

export default function TickerPage(props) {
  // const [state, setState] = useState({
  //   ticker: "",
  //   tickerChart: []
  // })

  // const onChange = (value) => {
  //   setState({
  //     ticker: value
  //   })
  // }

  // const createGraph = (event) => {
  //   event.preventDefault();
  //   searchTicker(state.ticker)
  //     .then((res) => setState({
  //       tickerChart: res
  //     }))
  // }

  const data = useContext(apiDataContex)

  return (
    <div>
      {/* <TickerSearchBar value={state.ticker} onChange={(e) => onChange(e.target.value)} onClick={createGraph} /> */}
      {/* <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart> */}
      {data.map(ele => (
        <li>This works</li>
      ))}
    </div>
  );

}