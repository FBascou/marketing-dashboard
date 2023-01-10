import React, { useEffect } from 'react';
import './GoalTrackerItem.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import Tooltip from '../Tooltip/Tooltip';
import { useState } from 'react';
import { websiteAllData } from '../../data/transformedData';

const statusList = {
  incomplete: 'red',
  standby: 'lightorange',
  complete: 'green',
};

const GoalTrackerItem = ({ data }) => {
  const { metric, goal, date, goalStatus } = data;
  const [percentage, setPercentage] = useState(0);

  const getMetricResult = () => {
    const result = websiteAllData.find((item) => item.name === metric).value;
    const resultInt = parseInt(result.split(',').join(''));
    const goalInt = parseInt(goal);
    const resultPercentage = (resultInt / goalInt) * 100;
    setPercentage(resultPercentage.toFixed(2));
  };

  useEffect(() => {
    getMetricResult();
  }, []);

  return (
    <div className="gt-item-container">
      <div className="gt-item-input-container">
        <div className="gt-item-metric">
          <Tooltip text={metric} />
        </div>
        <div className="gt-item-goal-number">
          <p>{goal}</p>
        </div>
        <div className="gt-item-date">
          <p>{date}</p>
        </div>
      </div>
      <div className="gt-item-interaction-container">
        <div className="gt-item-status">
          <BsFillCircleFill
            style={{ color: percentage < 100 ? statusList.incomplete : statusList.complete }}
          />
        </div>
        <div className="gt-item-percentage">{percentage}%</div>
        {/* remove these and add them to goal tracker page? */}
        {/* <div className="gt-item-edit">
          <AiOutlineEdit />
        </div> */}
        <div className="gt-item-delete">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default GoalTrackerItem;
