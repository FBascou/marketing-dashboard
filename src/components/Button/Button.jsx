import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="button-container" onClick={onClick}>
      +
    </button>
  );
};

export default Button;
