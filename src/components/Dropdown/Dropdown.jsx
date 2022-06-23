import React from 'react';

const Dropdown = ({ label, data, value, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {data.map((option) => (
            <option key={Math.random()} value={option.value}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <p>{value}</p>
    </div>
  );
};

export default Dropdown;
