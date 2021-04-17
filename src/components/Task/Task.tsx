import React from 'react';
import { TaskContainer } from './styles';

interface TaskProps {
  taskName: string;
  isChecked: boolean;
  editTask: (id:number) => void;
  deleteTask: (id:number) => void;
}

export function Task({ taskName, isChecked, editTask, deleteTask }: TaskProps) {
  return (
    <TaskContainer key={taskName} id={taskName}>
      <div className='task-check'>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            readOnly
          />
          <span className='checkmark'></span>
        </label>
        <p>{taskName}</p>
      </div>
      <div className='action-buttons'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </TaskContainer>
  )
}