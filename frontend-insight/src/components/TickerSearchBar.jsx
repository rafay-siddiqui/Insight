import React from "react";
import Button from "./Button";
import './TickerSearchBar.scss'

export default function TickerSearchBar(props) {


  return (
    <form className='tickerSearchBar'>
      <input placeholder="Enter ticker or company name" value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
      <Button tickersearch onClick={props.onClick}>Search</Button>
    </form>

  )
}