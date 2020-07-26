import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../contexts/TaskListContext';

import '../App.css'
import TaskForm from './TaskForm';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
