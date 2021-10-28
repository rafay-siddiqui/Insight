import React from "react";

export default function TickerSearchBar(props) {

  // let name = "";
  
  

  // searh bar needs to be passed functions from view page for state
  return (
    <form>
      <input placeholder="Enter ticker name" value={props.value} onChange={props.onChange}/>
      <button onClick={props.onClick}>Search</button>
    </form>

  )
}