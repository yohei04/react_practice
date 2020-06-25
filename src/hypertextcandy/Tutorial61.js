import React from 'react';
import { useState, useEffect } from 'react';

const Tutorial61 = () => {
  const [users, setUsers] = useState(null);

  const url =
    'https://randomuser.me/api/?results=5&nat=us&inc=gender,name,email';

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url).then((res) => res.json());
      setUsers(response.results);
    };
    fetchUser();
  }, []);

  console.log(users);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users
          ? users.map((user) => (
              <tr>
                <td>
                  {user.name.title} {user.name.first} {user.name.last}
                </td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))
          : ''}
      </tbody>
    </table>
  );
};

export default Tutorial61;
