import React from 'react'
import './Card.css'
import Tooltip from '../Tooltip/Tooltip'

const Card = ({ title, number, unit }) => {
  return (
    <div className="card-container">
      <h3>
        <Tooltip text={title} />
      </h3>
      <p>
        {number}
        <span>{unit}</span>
      </p>
    </div>
  )
}

export default Card
