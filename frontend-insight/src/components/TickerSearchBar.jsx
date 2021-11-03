import React from "react";
import Button from "./Button";
import './TickerSearchBar.scss'

export default function TickerSearchBar(props) {


  return (
    <form>
      <input placeholder="Enter ticker name" value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
      <Button tickerresult onClick={props.onClick}>Search</Button>
    </form>

  )
}