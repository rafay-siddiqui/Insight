import React from 'react';
import Button from './Button'
import './TabView.scss'

export default function TabView(props) {


  return (
    <div className='tabView'>
      <Button tab>Insight</Button>
      <Button tab>Explore</Button>
      <Button tab>Forecast</Button>
    </div>
  )
}