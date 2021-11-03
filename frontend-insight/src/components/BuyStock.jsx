import React, { useState } from 'react';
import './BuyStock.scss'
import Button from './Button';

export default function BuyStock(props) {

  return (
    <div className='purchasewrapper'>
      <h5>Purchase This Stock</h5>
      <div className="stockform">
        <input type='number' className='buystock buystock--input' value={props.value} onChange={(e) => { props.onChange(e.target.value) }} />
        <button href='/portfolio' className='button--buystock' onClick={props.onClick}>Buy</button>
      </div>
    </div>
  )
}