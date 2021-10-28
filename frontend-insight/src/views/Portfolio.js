import React from 'react';
import ExampleChart from './ExampleChart';
import History from '../components/History'
import YourStocks from '../components/YourStocks';
import './Portfolio.scss';

export default function Portfolio(props) {


  return (
    <div className="portfolioDiv--left">

      <h2>Portfolio</h2>

      <div className="portfolioDiv--row1">
        <ExampleChart></ExampleChart>
        <YourStocks></YourStocks>
      </div>

      <History></History>

    </div>
  )
}