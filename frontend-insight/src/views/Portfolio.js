import React, {useState, useContext} from "react";
import ExampleChart from "./ExampleChart";
import History from "../components/History";
import YourStocks from "../components/YourStocks";
import "./Portfolio.scss";
import TickerLookup from "./TickerLookup";
import "../css/Insight.css";
import "../css/insight.min.css";
import StockQuote from "./StockQuote";
import { authContext } from "../providers/AuthProvider";
import getStockList from "../api/GetStockList";

export default function Portfolio(props) {
  const { user } = useContext(authContext);

  // getStockList(user)

  return (
    <>
      {/* Row 1 */}
      <div id='row-1' class="row">

        <div id='chart--card' class="card shadow mb-4">

          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Portfolio</h6>
          </div>

          <div className='chart--portfolio'>
            <ExampleChart />
          </div>

        </div>

        

      </div>


      {/* Row 2 */}

      <div id='row-2' class="row">

        <div id='stocks--card' class="card shadow mb-4">

          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Your Stocks</h6>
          </div>

          <div class="card-body">
            <YourStocks />
          </div>

        </div>

        <div id='history--card' class="card shadow mb-4">

          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Purchase History</h6>
          </div>

          <div class="card-body">
            <History />
          </div>

        </div>

      </div>
    </>
  );
}
