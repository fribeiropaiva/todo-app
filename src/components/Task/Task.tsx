import React from 'react';

interface TaskProps {
  taskName: string;
  isChecked: boolean;
  editTask: (id:number) => void;
  deleteTask: (id:number) => void;
}

export function Task({ taskName, isChecked, editTask, deleteTask }: TaskProps) {
  return (
    <li key={taskName} id={taskName}>
      <input type='checkbox' />
      {taskName}
      <button>Edit</button>
      <button>Delete</button>
    </li>
  )
}