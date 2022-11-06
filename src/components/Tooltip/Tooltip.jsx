import React from 'react'
import './Tooltip.css'

const Tooltip = ({ text }) => {
  return (
    <div className="tooltip-container">
      <span>{text}</span>
      <div className="tooltip-popup">{text}</div>
    </div>
  )
}

export default Tooltip
