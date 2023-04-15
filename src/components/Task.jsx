import React from 'react';
import Checkbox from './Checkbox';

const Task = ({ name, done, onToggle, onDelete }) => {

    const handleTaskClick = () => {
        onToggle(!done);
      }

  return (
    <div className={'task ' + (done ? 'done': '')} onClick={handleTaskClick}>
      <Checkbox checked={done} onClick={() => onToggle(!done)}/>
      <span>{name}</span>
      <button className='delete-icon' onClick={onDelete}>—</button>
    </div>
  );
};

export default Task;