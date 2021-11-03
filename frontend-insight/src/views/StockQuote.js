import { React, useState } from 'react';
import './StockQuote.scss'
import Button from '../components/Button'
import { hyperlinkTicker } from '../helper/fetchers';
import Chart from 'react-apexcharts'

export default function StockQuote(props) {

  let series = [{
    data: []
  }];

  let chartName = () => {
    if (props.data) {
      return `${props.data.symbol}'s Chart`
    } else {
      return 'Choose a Stock to Display'
    }
  }

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
      height: 'auto'
    },
    title: {
      text: `${chartName()}`,
      align: 'left',
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
    <>
      {<Chart options={options} series={series} type="candlestick" height={600} width={'100%'} />}
    </>
  )
}