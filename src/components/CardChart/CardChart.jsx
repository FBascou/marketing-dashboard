import React from 'react';
import './CardChart.css';
import LineChart from '../charts/LineChart/LineChart';

const CardChart = ({
  data,
  colorPrimary,
  colorSecondary,
  title,
  growthRate,
  cost,
  costPerRate,
}) => {
  return (
    <div className="card-chart-container">
      <h2>{title}</h2>
      <div className="card-chart-graph">
        <LineChart
          data={data}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
        />
      </div>
      <div className="card-chart-overview">
        <div className="card-chart-wrapper">
          <h3>Growth Rate</h3>
          <p style={{ color: growthRate > 0 ? 'green' : 'red' }}>
            {growthRate}%
          </p>
        </div>
        <div className="card-chart-wrapper">
          <h3>Cost-Per-{title}</h3>
          <div className="card-chart-cost">
            <p>${cost}</p>
            {/* <div className="percentage-change">
              <span style={{ color: costPerRate > 0 ? 'green' : 'red' }}>
                {costPerRate}%
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChart;
