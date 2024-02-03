// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      let APIuRL = 'http://localhost:3001/login';
      const response = await axios.post(APIuRL, { email, password });
      console.log(response.data);
      localStorage.setItem('userrole', response.data.user.roles);

      navigate('/auth');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const registerPage = ()=>{
    navigate('/register')
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={registerPage}>Register</button>
    </div>
  );
};

export default Login;
