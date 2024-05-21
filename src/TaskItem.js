import React, { useState } from 'react';

function TaskItem({ task, toggleTaskCompletion, updateTaskTitle, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTaskTitle(task.id, newTitle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleTaskCompletion(task.id)} 
          />
          {task.title}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
