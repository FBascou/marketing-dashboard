import React from 'react';
import './GoalTrackerItem.css';

const GoalTrackerItem = ({ goal, date, goalStatus }) => {
  return (
    <div className="gt-item-container">
      <p className="gt-item-goal">1,000,000 Facebook followers</p>
      <p className="gt-item-date">25-02-2023</p>
      <div className="gt-item-status">X</div>
      <div className="gt-item-edit">X</div>
      <div className="gt-item-delete">X</div>
    </div>
  );
};

export default GoalTrackerItem;
