import { React, useState } from 'react';
import './StockQuote.scss'
import Button from '../components/Button'
import { hyperlinkTicker } from '../helper/fetchers';
import Chart from 'react-apexcharts'

export default function StockQuote(props) {

  let series = [{
    data: []
  }];

  if (props.data) {
    const data = props.data.historical.map(day => (
      {
        x: day.date,
        y: [day.open, day.high, day.low, day.close]
      }
    ));
    series[0].data = data;
  }

  const options = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  return (
    <div>
      <h2>Stock Quote</h2>
      {/* <Button login onClick={() => fetchData(props.ticker)}>API Call</Button>
      <Button login onClick={ () => console.log(stockData[5]) }>Console Log</Button>
      {stockData && <ExampleChart series={stockData}/>} */}
      {props.data && <Chart options={options} series={series} type="candlestick" height={350} width={900} />}

    </div>
  )
}