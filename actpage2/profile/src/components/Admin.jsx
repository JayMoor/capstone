import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdministratorPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch list of users
        axios.get('http://localhost:3001/api/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
        console.log('USERS', users)
    // Fetch current reviews
  }, []);

  return (
    <div>
      <h1>Administrator Page</h1>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdministratorPage;
