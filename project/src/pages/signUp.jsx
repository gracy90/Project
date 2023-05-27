import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {db} from "../firebase.config";
import { useNavigate,Link } from "react-router-dom";
import React, { useState } from 'react';

function SignUp() {
  const navigate = useNavigate();
  const [loginFormData, setLoginFom] = useState({username:'', email:'',password:''});

  const handleChange=(e)=>{
        e.preventDefault();
        setLoginFom((prev)=>({
            ...prev,[e.target.id]:e.target.value
        }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      updateProfile(auth.currentUser,{displayName:username});
      navigate('/');
 
    } catch (error) {
      
    }
  }

  const {username,email,password}=loginFormData;

  return (
    <div className="login-container">
      <h1 className="login-heading">Create an account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <h2>Username:</h2>
          <input id="username" type="text" value={username} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-group">
          <h2>Email:</h2>
          <input id="email" type="text" value={email} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-group">
          <h2>Password:</h2>
          <input id="password" type="password" value={password} onChange={(e) => handleChange(e)} />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
      <h3>Don't have an account? <Link to='/login'> Login</Link></h3>
      

    </div>
  );
}

export default SignUp