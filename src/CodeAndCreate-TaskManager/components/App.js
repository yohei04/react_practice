import React from 'react';
import TaskList from './TaskList';
import TaskListContextProvider from '../contexts/TaskListContext';
import TaskForm from './TaskForm';
import Header from './Header';

import '../App.css'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
