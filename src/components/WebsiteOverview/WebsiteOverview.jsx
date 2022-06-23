import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './WebsiteOverview.css';

const WebsiteOverview = ({ onClick, showModal, dataList }) => {
  return (
    <div className="overview-container">
      <h2>Website</h2>
      <div className="website-card-container">
        {/* <Card title="Traffic" number="123,546" /> */}
        <Card title="Sessions" number="123,546" />
        <Card title="Avg. Session Time" number="3" unit="mins" />
        <Card title="CTR" number="0.45" unit="%" />
        {/* <Card title="ER" number="0.54" unit="%" /> */}

        <Button onClick={onClick} />
      </div>
    </div>
  );
};

export default WebsiteOverview;
