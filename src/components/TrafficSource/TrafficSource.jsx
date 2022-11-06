import React from 'react'
import DonutChart from '../charts/DonutChart/DonutChart'
import './TrafficSource.css'

const TrafficSource = ({ data }) => {
  return (
    <div className="traffic-source-container">
      <h2>Traffic Source</h2>
      <div>
        <DonutChart data={data} />
      </div>
    </div>
  )
}

export default TrafficSource
