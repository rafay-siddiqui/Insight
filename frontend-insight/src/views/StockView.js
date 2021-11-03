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

    <div className="stockview">

      {/* <!-- TickerLookup --> */}
      <div id='lookup--card' class="card shadow">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Ticker Lookup</h6>
        </div>

        <div id='lookup--stocks'>
          <TickerLookup onClick={showStock} data={displayStock} />
        </div>
      </div>

      <div id='quotegraph--card' class="card shadow">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Stock Quote</h6>
        </div>

        <div className="quoteHolder">
          <StockQuote data={displayStock} />
        </div>
      </div>


    </div>
  )
}