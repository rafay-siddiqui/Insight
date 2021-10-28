import React from 'react';
import Button from './Button'

export default function TickerResult(props) {

  return (
    <Button chart onClick={props.onClick} >{props.ticker} {props.company}</Button>
  )
}