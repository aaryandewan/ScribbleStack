import React, { useState } from 'react';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    // Send registration request to the API endpoint
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Register User</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <label style={{ marginBottom: '10px' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            style={{ marginBottom: '20px', padding: '5px' }}
          />
          <label style={{ marginBottom: '10px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ marginBottom: '20px', padding: '5px' }}
          />
          <button
            onClick={handleRegister}
            style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
