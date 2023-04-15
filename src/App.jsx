import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';
import Task from './components/Task';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [{name:name, done:false}, ...prev]
    });
  };

  function updateTask(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      if (newDone) {
        const completedTask = newTasks.splice(taskIndex, 1)[0];
        newTasks.push(completedTask);
      }
      return newTasks;
    });
  };

  function deleteTask(removingIndex) {
    setTasks(prev => {
      return prev.filter((_, index) => index !== removingIndex);
  })
};

  return (
    <>
      <main>
        <div className='listWrapper'>       
          <Title/>        
          <Form onAdd={addTask}/>
          {tasks.map((task, index) => (
          <Task
            onDelete={() => deleteTask(index)}
            key={index}
            name={task.name} 
            done={task.done} 
            onToggle={done => updateTask(index, done)} 
          />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;