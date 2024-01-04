import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';


const AdministratorPage = () => {

  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    // Fetch list of users
        axios.get('http://localhost:3001/api/users')
        // sort users by user.username
        .then(response => setUsers(response.data.sort((a, b) => a.username.localeCompare(b.username))))
        .catch(error => console.error('Error fetching users:', error));
    // Fetch current reviews
    console.log('fetching users')
  }, []);

  
  // grab the user.id from the parent of the clicked button
  const handleDelete = (e) => {
    console.log('Delete user', e.target.parentNode.id);
    // TODO on delete remove both user and their reviews w/ axios
    // Need fetch users and setUsers again after this operation
  };
  

  return (
    <div>
      <h1>Administrator Page</h1>
      <ul>
        <h2>Current Users</h2>
        {users.map(user => (
          <div id={user.id} key={user.id} style={{maxWidth: '200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {user.username}
            <Button variant="contained" color="success" onClick={handleDelete} style={{ margin: '10px', height: '20px'}} >
              Delete
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdministratorPage;
