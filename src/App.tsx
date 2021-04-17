import { useState } from 'react';
import GlobalStyles from './styles/globalStyles';
import { Task } from './components/Task/Task';

interface TaskProperties {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<string>('')
  const [activeTasks, setActiveTasks] = useState<TaskProperties[]>([]);
  const [allTasks, setAllTasks] = useState<TaskProperties[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskProperties[]>([]);
  const [tasksListHeader, setTasksListHeader] = useState<string>('All Tasks');
  const [ids, setIds] = useState<number[]>([]);

  function generateTaskId() {
    const newId = Math.floor(Math.random() * 100 + 1);
    if (ids.length && ids.find(id => newId === id)) {
      generateTaskId();
    } else {
      setIds([...ids, newId]);
      return newId;
    }
  }

  function addTask() {
    const task = {
      id: generateTaskId() || 0,
      title: newTask,
      isCompleted: false
    }
    setActiveTasks([...activeTasks, task]);
    setAllTasks([...allTasks, task]);
    setNewTask('');
  }

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
        <input
          className='new-task-input'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
          value={newTask}
          />
        <button
          className='add-task-button'
          onClick={addTask}
          >+</button>
        <div className='tasks-buttons-container'>
          <button>Show all tasks</button>
          <button>Show active tasks</button>
          <button>Show completed tasks</button>
        </div>
        <h2>{tasksListHeader}</h2>
        {(tasksListHeader == 'All Tasks') && allTasks.map(task => (
          <Task key={task.id} taskName={task.title} editTask={editTask} deleteTask={deleteTask} isChecked={task.isCompleted} />
        ))}
        <GlobalStyles />
      </main>
    </>
  );
}

export default App;
