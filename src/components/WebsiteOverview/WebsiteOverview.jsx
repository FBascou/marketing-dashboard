import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import AddNewModal from '../AddNewModal/AddNewModal';
import './WebsiteOverview.css';

let initialMetrics = [];

let initialMetric = {
  id: 0,
  metric: '',
};

const WebsiteOverview = ({ data }) => {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [metric, setMetric] = useState(initialMetric);
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetric((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setMetrics([...metrics, metric]);
    setMetric(initialMetric);
    setShowModal(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setMetric(initialMetric);
  };

  const handleClose = () => {
    setMetric(initialMetric);
    setShowModal(false);
  };
  return (
    <div className="overview-container">
      <h2>Website Overview</h2>
      <div className="website-card-container">
        {data?.map((item, index) => (
          <Card key={index} title={item.name} number={item.value} />
        ))}
        {/* {data.length < 6 ? <Button onClick={handleModal} /> : null}
        {showModal ? (
          <AddNewModal
            title={'Metric'}
            data={data}
            section={'websiteOverview'}
            metricOptions={data}
            handleClose={handleClose}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleClear={handleClear}
          />
        ) : null} */}
      </div>
    </div>
  );
};

export default WebsiteOverview;
