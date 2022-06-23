import React from 'react';

const Input = ({ goals, setGoals }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name, value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New goal"
        onChange={handleChange}
        // value={value}
        // name={name}
      />
    </div>
  );
};

export default Input;
