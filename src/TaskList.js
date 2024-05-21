import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, updateTaskTitle, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          updateTaskTitle={updateTaskTitle} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
