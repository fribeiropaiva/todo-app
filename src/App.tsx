import { useState, useEffect } from 'react';
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

  useEffect(() => {
    try {
      const cachedData = localStorage.getItem('allTasks');
      if (cachedData) {
        const cachedTasks = JSON.parse(cachedData);
        setAllTasks(cachedTasks);
        setActiveTasks(cachedTasks.filter((task:TaskProperties) => task.isCompleted === false));
        setCompletedTasks(cachedTasks.filter((task:TaskProperties) => task.isCompleted === true));
      }
    } catch(e) {
      console.error('Unable to restore data from cache.', e);
    }
  }, []);

  function updateCache(newState: TaskProperties[]) {
    try {
      localStorage.setItem('allTasks', JSON.stringify(newState));
    } catch(e) {
      console.error('Unable to restore data from cache.', e);
    }
  }

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

    setActiveTasks((previousState) => [...previousState, task]);
    setAllTasks((previousState) => [...previousState, task]);
    setNewTask('');

    updateCache([...allTasks, task])
  }

  function handleTaskCompletion(id:number) {
    const updatedTasks = allTasks.map(task => {
      if (task.id === id) {
        setCompletedTasks((previousState) => [...previousState, {...task, isCompleted: !task.isCompleted }]);
        return {...task, isCompleted: !task.isCompleted }
      }
       return task;
    });

    setAllTasks(updatedTasks);
    setActiveTasks(updatedTasks.filter(task => task.isCompleted === false));

    updateCache(updatedTasks);
  }

  function editTask(id:number, newTaskTitle:string) {
    const updatedTasks = allTasks.filter(task => {
      if (task.id === id) {
        task.title = newTaskTitle;
        return task;
      }
      return task;
    });

    setAllTasks(updatedTasks);

    updateCache(updatedTasks);
  }

  function deleteTask(deletedId:number) {
    const updatedTasks = allTasks.filter(task => task.id !== deletedId);
    setIds(ids.filter(id => id !== deletedId));

    setAllTasks(updatedTasks);
    setActiveTasks(updatedTasks.filter(task => task.isCompleted === false));
    setCompletedTasks(updatedTasks.filter(task => task.isCompleted === true));

    updateCache(updatedTasks);
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
          <button type='button' onClick={() => setTasksListHeader('All Tasks')}>Show all tasks</button>
          <button type='button' onClick={() => setTasksListHeader('Active Tasks')}>Show active tasks</button>
          <button type='button' onClick={() => setTasksListHeader('Completed Tasks')}>Show completed tasks</button>
        </div>
        <h2>{tasksListHeader}</h2>
        {(tasksListHeader === 'All Tasks') && allTasks.map(task => (
          <Task key={task.id} id={task.id} taskName={task.title} editTask={editTask} deleteTask={deleteTask} handleTaskCompletion={handleTaskCompletion} isChecked={task.isCompleted} />
        ))}
        {(tasksListHeader === 'Active Tasks') && activeTasks.map(task => (
          <Task key={task.id} id={task.id} taskName={task.title} editTask={editTask} deleteTask={deleteTask} handleTaskCompletion={handleTaskCompletion} isChecked={task.isCompleted} />
        ))}
        {(tasksListHeader === 'Completed Tasks') && completedTasks.map(task => (
          <Task key={task.id} id={task.id} taskName={task.title} editTask={editTask} deleteTask={deleteTask} handleTaskCompletion={handleTaskCompletion} isChecked={task.isCompleted} />
        ))}
        <GlobalStyles />
      </main>
    </>
  );
}

export default App;
