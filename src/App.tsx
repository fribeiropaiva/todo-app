import React from 'react';
import GlobalStyles from './styles/globalStyles';

function App() {
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
        <h2>3 tasks remaining</h2>
        <ul>
          <li>
            <input type='checkbox'></input>
            Eat
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <input type='checkbox'></input>
            Sleep
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <li>
            <input type='checkbox'></input>
            Repeat
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
        <GlobalStyles />
      </main>
    </>
  );
}

export default App;
