import React from 'react';
import './Card.css';

const Card = ({ title, number, unit }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>
        {number}
        <span>{unit}</span>
      </p>
    </div>
  );
};

export default Card;
