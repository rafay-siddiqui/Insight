import React from 'react';
import Button from './Button'

export default function TickerResult(props) {

  return (
    <Button tickerresultitem onClick={props.onClick} >{props.company} ({props.ticker})</Button>
  )
}