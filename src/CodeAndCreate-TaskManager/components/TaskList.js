import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks)
  return (
    <div>
      <ul className="list">
        {tasks.map((task) => <Task  />
        )}
      </ul>
    </div>
  );
};

export default TaskList;
