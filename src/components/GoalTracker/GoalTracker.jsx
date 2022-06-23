import React from 'react';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';
import GoalTrackerItem from '../GoalTrackerItem/GoalTrackerItem.jsx';
import './GoalTracker.css';

let initialGoals = [
  {
    id: '',
    goal: '',
    date: '',
    goalStatus: '',
  },
];

const GoalTracker = ({ title, data, colorPrimary, colorSecondary }) => {
  const [goals, setGoals] = useState(initialGoals);
  const [metrics, setMetrics] = useState('Metrics');
  const [numbers, setNumbers] = useState('Numbers');
  const [channels, setChannels] = useState('Channels');
  let metricOptions = Object.keys(data);
  let metricNumbers = Object.values(data);
  // let metricChannels = Object.keys()
  // console.log(metricNumbers);

  const handleMetricsChange = (event) => {
    setMetrics(event.target.value);
  };

  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };

  const handleChannelsChange = (event) => {
    setChannels(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="goal-tracker-container">
      <h2>{title}</h2>
      <div className="goal-tracker-list">
        {goals.map((item, index) => (
          <GoalTrackerItem key={index} {...item} />
        ))}
      </div>
      <div className="goal-tracker-new">
        <Dropdown
          label="Metrics"
          data={metricOptions}
          value={metrics}
          onChange={handleMetricsChange}
        />
        {/* <Dropdown
          label="Values"
          data={metricNumbers}
          value={numbers}
          onChange={handleNumbersChange}
        /> */}

        <div className="goal-tracker-btn">
          <input type="button" value="+" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;
