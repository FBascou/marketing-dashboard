import React from 'react'
import { useState } from 'react'
import GoalTrackerItem from '../GoalTrackerItem/GoalTrackerItem.jsx'
import './GoalTracker.css'
import Button from '../Button/Button'
import AddNewModal from '../AddNewModal/AddNewModal.jsx'
import Table from '../Table/Table.jsx'
import { metricList } from '../../data/metricList.jsx'

let initialGoals = []

let initialStatusColor = 'red'

let initialGoal = {
  id: 0,
  metric: '',
  goal: '',
  date: '',
  goalStatus: initialStatusColor,
}

// Check if metric is measured in number, time or percentage

const GoalTracker = ({ title, data, colorPrimary, colorSecondary }) => {
  // adapt all of this for modalContext, make it general
  const [goals, setGoals] = useState(initialGoals)
  const [goal, setGoal] = useState(initialGoal)
  const [showModal, setShowModal] = useState(false)
  // const [statusColor, setStatusColor] = useState(initialStatusColor);
  const headers = ['Metric', 'Goal', 'Date', 'Status']

  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setGoal((prev) => ({ ...prev, [name]: value }))
    if (goal.goal < 156487) {
      setGoal((prev) => ({ ...prev, goalStatus: initialStatusColor }))
    } else {
      setGoal((prev) => ({ ...prev, goalStatus: 'green' }))
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setGoals([...goals, goal])
    setGoal(initialGoal)
    setShowModal(false)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setGoal(initialGoal)
  }

  const handleClose = () => {
    setGoal(initialGoal)
    setShowModal(false)
  }

  return (
    <div className="goal-tracker-container">
      <h2>{title}</h2>
      {goals?.map((item, index) => (
        // should this be a table?
        <GoalTrackerItem key={index} data={item} />
      ))}
      <div className="goal-tracker-new">
        <div className="goal-tracker-btn">
          {goals.length < 6 ? <Button onClick={handleModal} /> : null}
          {showModal ? (
            <AddNewModal
              title={'Goal'}
              data={goal}
              section={''}
              metricOptions={metricList}
              handleClose={handleClose}
              handleChange={handleChange}
              handleAdd={handleAdd}
              handleClear={handleClear}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default GoalTracker
