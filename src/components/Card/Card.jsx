import React from 'react';
import './Card.css';
import Tooltip from '../Tooltip/Tooltip';

const Card = ({ title, number }) => {
  // on hover, delete button
  return (
    <div className="card-container">
      <h3>
        {/* <Tooltip text={title} /> */}
        {title}
      </h3>
      <p>{number}</p>
    </div>
  );
};

export default Card;
