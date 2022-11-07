import React from 'react'
import './GoalTrackerItem.css'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import Tooltip from '../Tooltip/Tooltip'

const statusList = {
  incomplete: 'red',
  standby: 'lightorange',
  complete: 'lightgreen',
}

const GoalTrackerItem = ({ data }) => {
  const { metric, goal, date, goalStatus } = data

  return (
    <div className="gt-item-container">
      <div className="gt-item-input-container">
        <div className="gt-item-metric">
          <p>{metric}</p>
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
          <BsFillCircleFill style={{ color: goalStatus }} />
        </div>
        <div className="gt-item-percentage">
          <Tooltip text={'85%'} />
          {/* <p></p> */}
        </div>
        {/* remove these and add them to goal tracker page? */}
        <div className="gt-item-edit">
          <AiOutlineEdit />
        </div>
        <div className="gt-item-delete">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}

export default GoalTrackerItem
