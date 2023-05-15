import React, { useState } from 'react';
import './index';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <h2>Username:</h2>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <h2>Password:</h2>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
