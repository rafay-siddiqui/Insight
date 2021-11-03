import React from "react";
import ExampleChart from "./ExampleChart";
import History from "../components/History";
import YourStocks from "../components/YourStocks";
import "./Portfolio.scss";
import TickerLookup from "./TickerLookup";
import "../css/Insight.css";
import "../css/insight.min.css";
import StockQuote from "./StockQuote";

export default function Portfolio(props) {
  return (
    <>
      <div class="row">
        {/* <!-- Area Chart --> */}
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Portfolio</h6>
            </div>

            <div class="card-body">
              <div className='chart--portfolio'>
                <ExampleChart />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TickerLookup --> */}
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Ticker Lookup</h6>
            </div>

            <div id='lookup--portfolio' class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <TickerLookup />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Content Row --> */}
      <div class="row">
        {/* <!-- Content Column --> */}
        <div class="col-lg-6 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Your Stocks</h6>
            </div>
            <div class="card-body">
              <YourStocks />
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Purchase History</h6>
            </div>
            <div class="card-body">
              <History />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
