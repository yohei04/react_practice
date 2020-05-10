import React, { userState, useState } from 'react';
import Tweet from './Tweet'
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { name: 'ED', message: 'Hello there' },
    { name: 'Tadashi', message: "I don't know" },
    { name: 'YesMan', message: 'Yes I will' },
  ])


  return (
    <div>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}


      {/* <h1 className={isRed ? 'red' : ''}>color</h1>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1> */}
    </div>
  );
}

export default App;
