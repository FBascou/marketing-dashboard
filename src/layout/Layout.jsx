import React from 'react'
import { useState } from 'react'
import BudgetExpense from '../components/BudgetExpense/BudgetExpense'
import CardChart from '../components/CardChart/CardChart'
import GoalTracker from '../components/GoalTracker/GoalTracker'
import Header from '../components/Header/Header'
import TrafficSource from '../components/TrafficSource/TrafficSource'
import WebsiteOverview from '../components/WebsiteOverview/WebsiteOverview'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import './Layout.css'
import {
  allDataArray,
  leadsAllData,
  conversionsAllData,
  allSocialMediaData,
  websiteTrafficAllData,
} from '../data/transformedData'

const Layout = () => {
  const [showModal, setShowModal] = useState('')

  const handleModal = (e) => {
    e.preventDefault()
    console.log('hello')
    setShowModal((show) => !show)
  }

  const handleCancel = () => {
    setShowModal(false)
  }
  const handleAccept = () => {
    setShowModal(false)
  }

  const colorPrimary = '#FF00FF'
  const colorSecondary = '#800080'

  return (
    <main className="main-grid-container">
      {/* <div className="logo area"></div> */}
      <div className="budget-expense-grid-container area">
        <BudgetExpense
          data={allDataArray[0]}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
        />
      </div>
      <div className="overview-grid-container area">
        <WebsiteOverview onClick={handleModal} showModal={showModal} data={allDataArray} />
      </div>
      <div className="lead-grid-container area">
        <CardChart
          data={leadsAllData.monthlySumObject}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
          title="Leads"
          growthRate={leadsAllData.growthRate}
          cost={leadsAllData.costPerLastMonth}
          costPerRate={leadsAllData.costPerGrowthRate}
        />
      </div>
      <div className="conversion-grid-container area">
        <CardChart
          data={conversionsAllData.monthlySumObject}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
          title="Conversions"
          growthRate={conversionsAllData.growthRate}
          cost={conversionsAllData.costPerLastMonth}
          costPerRate={conversionsAllData.costPerGrowthRate}
        />
      </div>
      <div className="social-media-grid-container area">
        <SocialMedia title="Social Media" data={allSocialMediaData} colorPrimary={colorPrimary} />
      </div>
      <div className="traffic-source-grid-container area">
        <TrafficSource data={websiteTrafficAllData} />
      </div>
      <div className="goal-tracker-grid-container area">
        <GoalTracker
          data={allDataArray}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
          title="Goal Tracker"
        />
      </div>
    </main>
  )
}

export default Layout
