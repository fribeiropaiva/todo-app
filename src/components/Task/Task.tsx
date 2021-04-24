import { useState } from 'react';
import { TaskContainer } from './styles';
interface TaskProps {
  id: number;
  taskName: string;
  isChecked: boolean;
  editTask: (id:number, newTaskName:string) => void;
  deleteTask: (id:number) => void;
  handleTaskCompletion: (id:number) => void;
}

export function Task({id, taskName, isChecked, editTask, deleteTask, handleTaskCompletion }: TaskProps) {
  const [editingMode, setEditingMode] = useState(false);
  const [newTaskName, setNewTaskName] = useState('')

  function handleTaskEditing(id:number, newTaskName:string) {
    editTask(id, newTaskName);
    setEditingMode(false);
  }

  return (
    <TaskContainer key={id} id={taskName}>
      <div className={`${isChecked ? 'completed' : ''} task-check`}>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            readOnly
            checked={isChecked}
            onChange={() => handleTaskCompletion(id)}
          />
          <span className='checkmark'></span>
        </label>
        {editingMode ?
        <label>
          <input
            className='task-editing-input'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskName(e.target.value)}
            value={newTaskName}
          />
          <button
            className='save-task-editing'
            type='button'
            onClick={() => handleTaskEditing(id, newTaskName)}
            >Save</button>
        </label>
        : <p>{taskName}</p>
        }
      </div>
      <div className='action-buttons'>
        <button type='button' onClick={() => setEditingMode(true)}>Edit</button>
        <button type='button' onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </TaskContainer>
  )
}