import React, {useState, useContext} from "react";
import ExampleChart from "./ExampleChart";
import PercentChart from "./PercentChart";
import PercentCompoundedChart from "./PercentCompChart";
import History from "../components/History";
import YourStocks from "../components/YourStocks";
import "./Portfolio.scss";
import "../css/Insight.css";
import "../css/insight.min.css";
import { authContext } from "../providers/AuthProvider";
import Button from "../components/Button"

export default function Portfolio(props) {
  const { user } = useContext(authContext);
  const [percentCompChart, setPercentCompChart] = useState(true)
  const [percentChart, setPercentChart] = useState(false);
  const [moveChart, setMoveChart] = useState(false);

  const changeToPChart = () => {
    setMoveChart(false);
    setPercentCompChart(false)
    setPercentChart(true);
  }

  const changeToMoveChart = () => {
    setPercentChart(false);
    setPercentCompChart(false);
    setMoveChart(true);
  }

  const changeToPCompChart = () => {
    setPercentChart(false);
    setMoveChart(false);
    setPercentCompChart(true);
  }

  return (
    <>
      {/* Row 1 */}
      <div id='row-1' class="row">

        <div id='chart--card' class="card shadow mb-4">

          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Portfolio</h6>
          </div>

          <div className='chart--portfolio'>
            {percentCompChart && <PercentCompoundedChart/>}
            {percentChart && <PercentChart/>}
            {moveChart && <ExampleChart />}
            <Button chart onClick={changeToPCompChart}>Portfolio Percentage Change</Button> 
            <Button chart onClick={changeToPChart}>Daily Percentage Change</Button>
            <Button chart onClick={changeToMoveChart}>Portfolio Movement</Button>
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
