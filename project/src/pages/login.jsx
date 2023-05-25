import React, { useState } from 'react';
import '../index.css';

function Login() {
  const [loginFormData, setLoginFom] = useState({username:'',password:''});

  const handleChange=(e)=>{
        e.preventDefault();
        setLoginFom((prev)=>({
            ...prev,[e.target.id]:e.target.value
        }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  const {username,password}=loginFormData;

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <h2>Username:</h2>
          <input type="text" value={username} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-group">
          <h2>Password:</h2>
          <input type="password" value={password} onChange={(e) => handleChange(e)} />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
