import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        <h1 className='no-tasks'>No Tasks</h1>
      )}
    </div>
  );
};

export default TaskList;
