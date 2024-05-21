import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="New Task" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="submit" disabled={!title.trim()}>Add Task</button>
    </form>
  );
}

export default AddTask;
