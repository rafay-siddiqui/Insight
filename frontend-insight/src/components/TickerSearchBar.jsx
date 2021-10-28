import React from "react";

export default function TickerSearchBar(props) {


  return (
    <form>
      <input placeholder="Enter ticker name" value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
      <button onClick={props.onClick}>Search</button>
    </form>

  )
}