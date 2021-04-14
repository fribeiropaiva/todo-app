import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { Task } from './components/Task/Task';

function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasksListHeader, setTasksListHeader] = useState('No tasks');

  function editTask(id:number) {
    console.log('editing task');
  }

  function deleteTask(id:number) {
    console.log('deleting task');
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <h2>What needs to be done?</h2>
        <input className='new-task-input'></input>
        <button className='add-task-button'>+</button>
        <div className='tasks-buttons-container'>
          <button>Show all tasks</button>
          <button>Show active tasks</button>
          <button>Show completed tasks</button>
        </div>
        <h2>{tasksListHeader}</h2>
        <Task taskName='Eat' editTask={editTask} deleteTask={deleteTask} isChecked={true} />
        <GlobalStyles />
      </main>
    </>
  );
}

export default App;
