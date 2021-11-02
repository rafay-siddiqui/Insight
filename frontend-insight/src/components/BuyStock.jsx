import React, {useState} from 'react';
import './BuyStock.scss'

export default function BuyStock(props) {

  return (
    <>
      <h2>Buy This Stock</h2>
      <input type='number' className='buystock buystock--input' value={props.value} onChange={(e) => {props.onChange(e.target.value)}} />
      <button onClick={props.onClick}>Purchase</button>
    </>
  )
}