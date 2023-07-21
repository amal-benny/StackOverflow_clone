import React from 'react'
import './RightSidebar.css'
import WidgetTags from './WidgetTags'
import Widget from './Widget'

const RightSidebar = () => {
  return (
    <aide className="right-sidebar">
      <Widget/>
      <WidgetTags/>
    </aide>
  )
}

export default RightSidebar