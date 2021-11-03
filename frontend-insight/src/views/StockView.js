import { React, useState } from "react";
import TickerLookup from "./TickerLookup";
import StockQuote from "./StockQuote";
import { hyperlinkTicker } from "../helper/fetchers";
import "../css/Insight.css";
import "../css/insight.min.css";
import './StockView.scss'


export default function StockView() {
  const [displayStock, setDisplayStock] = useState('');

  const showStock = (ticker) => {

    hyperlinkTicker(ticker)
      .then((res) => setDisplayStock(res)
      )
  }

  return (

    <div>

      {/* <!-- TickerLookup --> */}
      <div id='lookup--card' class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Ticker Lookup</h6>
        </div>

        <div id='lookup--stocks' class="card-body">
          <TickerLookup onClick={showStock} data={displayStock} />
        </div>
      </div>

      <StockQuote data={displayStock} />

    </div>
  )
}