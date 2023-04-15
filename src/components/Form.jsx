import React, { useState } from 'react';

const Form = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Enter task name"
      />
      <button type="submit">+</button>
    </form>
  );
}

export default Form;