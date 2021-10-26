import React from 'react';
import Button from './Button'
import './TabView.scss'

export default function TabView(props) {


  return (
    <div className='tabView'>
      <Button tab>Tab 1</Button>
      <Button tab>Tab 2</Button>
      <Button tab>Tab 3</Button>
    </div>
  )
}